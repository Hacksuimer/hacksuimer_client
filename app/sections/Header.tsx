// components/Header.tsx
import Link from 'next/link';


export default function Header() {
//   const wallet = useWallet();

//   const handleConnectWallet = async () => {
//     if (!wallet.connected) {
//       await wallet.connect();
//     }
//     console.log("Connected wallet address:", wallet.account?.address);
//   };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center overflow-hidden">
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

    </header>
  );
}