'use client';

import { useState, useRef } from 'react';

interface MintFormProps {
  onFormChange?: (data: { image: File | null; title: string; description: string }) => void;
  onMint?: (data: { image: File | null; title: string; description: string }) => void;
  isConnected?: boolean;
}

export default function MintForm({ onFormChange, onMint, isConnected }: MintFormProps) {
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isMinting, setIsMinting] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFormChange = () => {
    onFormChange?.({ image, title, description });
  };

  const handleImageChange = (file: File | null) => {
    setImage(file);
    setTimeout(handleFormChange, 0);
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    setTimeout(handleFormChange, 0);
  };

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
    setTimeout(handleFormChange, 0);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        handleImageChange(file);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleImageChange(e.target.files[0]);
    }
  };

  const handleMint = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first!');
      return;
    }
    
    if (!image || !title.trim()) {
      alert('Please provide both an image and title for your NFT!');
      return;
    }

    setIsMinting(true);
    try {
      await onMint?.({ image, title, description });
    } catch (error) {
      console.error('Minting error:', error);
    } finally {
      setIsMinting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Your NFT</h2>
      
      {/* Image Upload */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Image
        </label>
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
            dragActive 
              ? 'border-indigo-500 bg-indigo-50' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {image ? (
            <div className="space-y-3">
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm text-gray-600">{image.name}</p>
              <button
                type="button"
                onClick={() => handleImageChange(null)}
                className="text-sm text-red-600 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-gray-600">Drag and drop your image here, or</p>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  browse files
                </button>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
      </div>

      {/* Title Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          NFT Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          placeholder="Enter a catchy title for your NFT"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
          maxLength={50}
        />
        <p className="text-xs text-gray-500 mt-1">{title.length}/50 characters</p>
      </div>

      {/* Description Input */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => handleDescriptionChange(e.target.value)}
          placeholder="Describe your NFT, its story, or what makes it special..."
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none"
          maxLength={200}
        />
        <p className="text-xs text-gray-500 mt-1">{description.length}/200 characters</p>
      </div>

      {/* Mint Button */}
      <button
        onClick={handleMint}
        disabled={!isConnected || !image || !title.trim() || isMinting}
        className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors duration-200 disabled:cursor-not-allowed"
      >
        {isMinting ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Minting NFT...
          </div>
        ) : (
          'Mint NFT'
        )}
      </button>
      
      {!isConnected && (
        <p className="text-sm text-gray-500 text-center mt-3">
          Connect your wallet to mint NFTs
        </p>
      )}
    </div>
  );
} 