import Image from 'next/image';

interface NFTCardProps {
  image?: string;
  title?: string;
  description?: string;
  tokenId?: string;
  isPreview?: boolean;
}

export default function NFTCard({ 
  image, 
  title, 
  description, 
  tokenId, 
  isPreview = false 
}: NFTCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="aspect-square relative bg-gray-100">
        {image ? (
          <Image
            src={image}
            alt={title || 'NFT'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg mb-2 truncate">
          {title || (isPreview ? 'Your NFT Title' : 'Untitled')}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {description || (isPreview ? 'Add a description for your NFT...' : 'No description')}
        </p>
        
        {tokenId && (
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              Token #{tokenId}
            </span>
          </div>
        )}
      </div>
    </div>
  );
} 