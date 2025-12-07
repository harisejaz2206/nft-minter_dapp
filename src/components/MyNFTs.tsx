'use client';

import { useState, useEffect } from 'react';
import NFTCard from './NFTCard';

interface NFT {
  tokenId: string;
  title: string;
  description: string;
  image: string;
}

interface MyNFTsProps {
  walletAddress?: string;
  isConnected?: boolean;
}

export default function MyNFTs({ walletAddress, isConnected }: MyNFTsProps) {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock data for demonstration - replace with actual contract calls
  const mockNFTs: NFT[] = [
    {
      tokenId: '1',
      title: 'Digital Sunset',
      description: 'A beautiful digital artwork capturing the essence of a perfect sunset.',
      image: '/api/placeholder/300/300'
    },
    {
      tokenId: '2', 
      title: 'Crypto Cat',
      description: 'An adorable cat living in the blockchain forever.',
      image: '/api/placeholder/300/300'
    },
    {
      tokenId: '3',
      title: 'Abstract Dreams',
      description: 'Colorful abstract patterns that represent the future of art.',
      image: '/api/placeholder/300/300'
    }
  ];

  useEffect(() => {
    if (isConnected && walletAddress) {
      loadUserNFTs();
    } else {
      setNfts([]);
    }
  }, [walletAddress, isConnected]);

  const loadUserNFTs = async () => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual smart contract calls
      // For now, simulate loading with mock data
      await new Promise(resolve => setTimeout(resolve, 1000));
      setNfts(mockNFTs);
    } catch (error) {
      console.error('Error loading NFTs:', error);
      setNfts([]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isConnected) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
        <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect Your Wallet</h3>
        <p className="text-gray-600">
          Connect your wallet to view your NFT collection
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">My NFTs</h2>
        <button
          onClick={loadUserNFTs}
          disabled={isLoading}
          className="text-indigo-600 hover:text-indigo-700 font-medium text-sm disabled:opacity-50"
        >
          {isLoading ? 'Loading...' : 'Refresh'}
        </button>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 aspect-square rounded-2xl mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      ) : nfts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nfts.map((nft) => (
              <NFTCard
                key={nft.tokenId}
                image={nft.image}
                title={nft.title}
                description={nft.description}
                tokenId={nft.tokenId}
              />
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Showing {nfts.length} NFT{nfts.length !== 1 ? 's' : ''} from your collection
            </p>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No NFTs Yet</h3>
          <p className="text-gray-600 mb-4">
            You haven't minted any NFTs yet. Create your first one above!
          </p>
        </div>
      )}
    </div>
  );
} 