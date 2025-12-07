'use client';

import { useState } from 'react';
import ConnectWallet from '@/components/ConnectWallet';
import MintForm from '@/components/MintForm';
import NFTPreview from '@/components/NFTPreview';
import MyNFTs from '@/components/MyNFTs';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [isConnected, setIsConnected] = useState(false);
  const [formData, setFormData] = useState({
    image: null as File | null,
    title: '',
    description: ''
  });

  const handleWalletConnected = (address: string) => {
    setWalletAddress(address);
    setIsConnected(true);
  };

  const handleFormChange = (data: { image: File | null; title: string; description: string }) => {
    setFormData(data);
  };

  const handleMint = async (data: { image: File | null; title: string; description: string }) => {
    console.log('Minting NFT with data:', data);
    // TODO: Implement actual minting logic
    // 1. Upload image to IPFS
    // 2. Create metadata JSON
    // 3. Upload metadata to IPFS
    // 4. Call smart contract mint function
    
    // For now, just simulate the process
    await new Promise(resolve => setTimeout(resolve, 3000));
    alert('NFT minted successfully! (This is a demo)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Modern Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  NFT Minter
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Create • Mint • Own</p>
              </div>
            </div>
            <ConnectWallet onWalletConnected={handleWalletConnected} />
          </div>
        </div>
      </nav>

      {/* Modern Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-indigo-700">Ethereum Sepolia Testnet</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
                Create Unique
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                NFTs
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your digital art into blockchain-verified NFTs. 
              <span className="text-indigo-600 font-semibold"> Upload, customize, and mint</span> directly to your wallet.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">ERC-721 Standard</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">IPFS Storage</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Wallet Owned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">

        {/* Main Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <MintForm
            onFormChange={handleFormChange}
            onMint={handleMint}
            isConnected={isConnected}
          />
          <NFTPreview
            image={formData.image}
            title={formData.title}
            description={formData.description}
          />
        </div>

        {/* My NFTs Section */}
        <div className="mt-16">
          <MyNFTs
            walletAddress={walletAddress}
            isConnected={isConnected}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              Built with Next.js, Tailwind CSS, and Ethereum
            </p>
            <p className="text-sm">
              🚀 Ready for Sepolia testnet • 📦 ERC-721 Standard • 🔗 IPFS Storage
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
