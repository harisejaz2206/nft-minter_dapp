'use client';

import { useState, useEffect } from 'react';
import NFTCard from './NFTCard';

interface NFTPreviewProps {
  image: File | null;
  title: string;
  description: string;
}

export default function NFTPreview({ image, title, description }: NFTPreviewProps) {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image);
      setImageUrl(url);
      
      // Cleanup function to revoke the object URL
      return () => URL.revokeObjectURL(url);
    } else {
      setImageUrl('');
    }
  }, [image]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Preview</h2>
      
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          This is how your NFT will appear once minted:
        </p>
        
        <NFTCard
          image={imageUrl}
          title={title}
          description={description}
          isPreview={true}
        />
        
        <div className="bg-gray-50 rounded-xl p-4 space-y-2">
          <h4 className="font-medium text-gray-900 text-sm">NFT Details:</h4>
          <div className="space-y-1 text-xs text-gray-600">
            <div className="flex justify-between">
              <span>Standard:</span>
              <span className="font-mono">ERC-721</span>
            </div>
            <div className="flex justify-between">
              <span>Storage:</span>
              <span className="font-mono">IPFS</span>
            </div>
            <div className="flex justify-between">
              <span>Network:</span>
              <span className="font-mono">Sepolia</span>
            </div>
          </div>
        </div>
        
        {(!image || !title.trim()) && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="text-sm font-medium text-amber-800">Ready to mint?</h4>
                <p className="text-sm text-amber-700 mt-1">
                  {!image && !title.trim() 
                    ? 'Add an image and title to get started'
                    : !image 
                    ? 'Upload an image for your NFT'
                    : 'Add a title for your NFT'
                  }
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 