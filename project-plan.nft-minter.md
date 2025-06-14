# 🎨 NFT Minter dApp (Beginner-Friendly Web3 Project)

## 🧠 Project Overview

This is a simple decentralized application (dApp) that allows users to **mint NFTs** to their Ethereum wallet. The app uses **ERC-721 tokens**, where each NFT represents a unique piece of content (e.g., an image, name, and description). It teaches core blockchain development concepts like token standards, decentralized storage, and smart contract integration with frontend code.

This project is the **next step after a basic ETH-based dApp like TipJar** and is meant to introduce the fundamentals of NFTs without the complexity of a full marketplace.

---

## ⚙️ Core Features

- 🦊 **Wallet Connect**: Users can connect MetaMask to the dApp.
- 📤 **NFT Minting**: Users upload an image, title, and description.
- 🧾 **IPFS Storage**: The image and metadata are uploaded to IPFS (via NFT.storage).
- 🪙 **ERC-721 Token Creation**: A smart contract mints a new NFT to the user’s wallet.
- 🖼️ **My NFTs View**: Users can see their minted NFTs directly from the contract.

---

## 🔨 Tech Stack

- **Smart Contract**: Solidity, using OpenZeppelin’s ERC-721 implementation.
- **Blockchain**: Ethereum testnet (Sepolia).
- **Dev Environment**: Hardhat for compilation and deployment.
- **Storage**: IPFS via [NFT.storage](https://nft.storage).
- **Frontend**: Next.js (React + TypeScript) with Ethers.js.
- **Wallet**: MetaMask for user authentication and transaction signing.

---

## 🧱 Smart Contract Details

- Based on OpenZeppelin’s `ERC721` contract.
- Uses a simple `mintNFT(address to, string memory tokenURI)` function.
- The `tokenURI` points to an IPFS-hosted JSON file containing:
  - `name`: The NFT’s title
  - `description`: A description of the NFT
  - `image`: The IPFS link to the uploaded image

---

## 📁 Suggested File Structure

```
nft-minter-dapp/
├── contracts/
│   └── NFTMinter.sol
├── scripts/
│   └── deploy.js
├── pages/
│   ├── index.tsx  # Main UI
│   └── _app.tsx
├── components/
│   ├── ConnectWallet.tsx
│   ├── MintForm.tsx
│   └── MyNFTs.tsx
├── utils/
│   └── ipfs.ts    # upload to NFT.storage
├── .env.local     # env vars like API keys & contract address
├── hardhat.config.js
├── package.json
└── README.md
```


---

## 📚 Learning Outcomes

By completing this project, you will learn:
- What ERC-721 is and how NFT minting works
- How to upload and retrieve files using IPFS/NFT.storage
- How to write a Solidity smart contract for NFTs
- How to connect a frontend (Next.js) with Ethereum using Ethers.js
- How to read token ownership and metadata from a smart contract

---

## 🪄 Bonus Extensions (Optional)

- Add metadata validation before minting
- Show user’s wallet address and ETH balance
- Style with Tailwind CSS for a polished UI
- Add loading/success states for minting flow

---

## 🏁 Next Steps

Once you're comfortable with this NFT Minter:
- Expand into an **NFT Gallery**
- Add **listing/selling features**
- Explore **ERC-1155** for semi-fungible tokens
- Or turn it into a mini NFT **profile badge generator**

