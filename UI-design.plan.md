# 🧑‍🎨 UI Layout & Component Design — Minimalist NFT Minter

## 📐 Page Structure (Visual Layout)

```
HEADER
┌────────────────────────────────────────────────────┐
│                Connect Wallet (top-right)          │
└────────────────────────────────────────────────────┘

MAIN SECTION
┌────────────────────────────┬───────────────────────┐
│        MintForm            │     NFTPreview        │
│    (image, title, desc)    │  (live card preview)  │
└────────────────────────────┴───────────────────────┘

MY NFTs
┌────────────────────────────────────────────────────┐
│     Grid of user's minted NFTs (3 per row)         │
└────────────────────────────────────────────────────┘
```

---

## 🧩 Component Overview

### `ConnectWallet.tsx`
- Located in the top-right header
- Shows “Connect Wallet” button
- Displays connected address once connected
- Handles `eth_requestAccounts` with MetaMask

---

### `MintForm.tsx`
- Left panel in the main section
- Inputs:
  - Image upload (file input or drag & drop)
  - NFT title
  - NFT description
  - "Mint NFT" button
- Handles:
  - Uploading metadata to IPFS
  - Calling smart contract `mint()` with `tokenURI`
- Shows loader or feedback (pending/success/failure)

---

### `NFTPreview.tsx`
- Right panel next to the form
- Live preview of the NFT card (image, title, desc)
- Updates in real-time as user fills in the form
- Can reuse the `NFTCard.tsx` component

---

### `MyNFTs.tsx`
- Section below the main form/preview
- Displays all NFTs owned by the connected wallet
- Uses a 3-column responsive grid layout
- Pulls `tokenOfOwnerByIndex` and `tokenURI()` for metadata

---

### `NFTCard.tsx`
- Reusable UI card for previewing NFTs
- Props:
  - `image` (IPFS URL)
  - `title`
  - `description`
  - optional: `tokenId`
- Styling:
  - `rounded-2xl`
  - `shadow-md`
  - `hover:scale-105 transition-all`
  - Tailwind classes

---

## 🎨 UI Design Style Guide

- **Theme**: Light mode  
- **Typography**: Modern sans-serif like `Inter`, `DM Sans`, or `Poppins`  
- **Colors**:  
  - Background: `#ffffff`  
  - Text: `#111111`  
  - Accent: `#6366f1` or `#10b981` (indigo or emerald)  
- **Component Style**:  
  - Use Tailwind for spacing, layout, and effects  
  - Minimal borders, large paddings  
  - Responsive and mobile-friendly  
  - Cards with `shadow`, `rounded-2xl`, and smooth hover animations

---

## 🌟 Optional UI Features

- Toast notifications (success/failure)
- Wallet address tooltip + copy button
- Skeleton loader while NFTs are loading
- IPFS upload progress bar
- “View on Etherscan” link for minted NFTs

---

## 🧠 Summary

This layout ensures:
- Clear separation between minting and viewing
- Smooth UX for beginners
- Aesthetic portfolio-ready frontend
- Enough complexity to teach core Web3 UI logic
