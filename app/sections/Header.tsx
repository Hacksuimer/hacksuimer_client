// components/Header.tsx
import Link from 'next/link';
// import { useWallet } from '@suiet/wallet-kit';
// import {ConnectButton} from '@suiet/wallet-kit';

export default function Header() {
//   const wallet = useWallet();

//   const handleConnectWallet = async () => {
//     if (!wallet.connected) {
//       await wallet.connect();
//     }
//     console.log("Connected wallet address:", wallet.account?.address);
//   };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      {/* Logo or Brand Name */}
      <div className="text-xl font-bold">
        <Link className="text-3xl"  href="/">Hacksuimer</Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <Link href="/activities" className="text-2xl hover:text-gray-400">
          Activities
        </Link>
        <Link href="/leaderboard" className="text-2xl hover:text-gray-400">
          LeaderBoard
        </Link>
      </nav>

      {/* Wallet Connect Button */}
      {/* <ConnectButton /> */}
      {/* <button
        // onClick={handleConnectWallet}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {wallet.connected ? "Connected" : "Connect Wallet"}
      </button> */}
    </header>
  );
}