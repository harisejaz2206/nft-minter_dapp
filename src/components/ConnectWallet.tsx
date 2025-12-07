'use client';

import { useState, useEffect } from 'react';

interface ConnectWalletProps {
  onWalletConnected?: (address: string) => void;
}

export default function ConnectWallet({ onWalletConnected }: ConnectWalletProps) {
  const [account, setAccount] = useState<string>('');
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {
    try {
      if (typeof window !== 'undefined' && window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          onWalletConnected?.(accounts[0]);
        }
      }
    } catch (error) {
      console.error('Error checking wallet connection:', error);
    }
  };

  const connectWallet = async () => {
    try {
      if (typeof window !== 'undefined' && window.ethereum) {
        setIsConnecting(true);
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        setAccount(accounts[0]);
        onWalletConnected?.(accounts[0]);
      } else {
        alert('Please install MetaMask to use this dApp!');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="flex items-center">
      {account ? (
        <div className="flex items-center gap-3 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
          <span className="text-emerald-700 font-medium text-sm">
            {formatAddress(account)}
          </span>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          disabled={isConnecting}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 text-sm"
        >
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </div>
  );
} 