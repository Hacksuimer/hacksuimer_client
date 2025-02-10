"use client";

// import { useWallet } from '@suiet/wallet-kit';
import { ConnectButton } from "@suiet/wallet-kit";
import Image from 'next/image';

import Event from "../assets/image/event.jpg";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen px-8">
      <h1 className="text-[32px] leading-tight md:text-[20px] lg:text-[64px] font-bold text-white max-w-[90%] mb-16">
        Participate in all events and earn NFT badges.
      </h1>
      {/* Wallet Connect Button */}
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-8">
        <ConnectButton className="text-xs md:text-sm bg-white text-black shadow-md hover:text-white" />
        <button 
          onClick={() => window.location.href = "/events/create"} 
          className="text-black bg-white px-4 py-3 rounded-2xl shadow-md hover:bg-gray-200 md:px-20"
        >
          Create Event
        </button>
        <button 
          onClick={() => window.location.href = "/"} 
          className="text-black bg-white px-4 py-3 rounded-2xl shadow-md hover:bg-gray-200 md:px-20"
        >
          Mint NFT
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="rounded-2xl p-8 border border-white/50 hover:border-[#6fbcf0] transition-all">
          {/* Image with curved top */}
          <div className="w-full h-40 overflow-hidden rounded-2xl mb-6">
            <Image
              src={ Event } // Updated image path
              alt="Description of the image"
              className="w-full h-full object-cover rounded-2xl"
              width={500} // Set a width for the image
              height={300} // Set a height for the image
            />
          </div>
          {/* Content */}
          <h3 className="text-2xl font-bold text-white mb-4">
            Move Smart Contracts
          </h3>
          <p className="text-gray-400">
            Build secure and efficient smart contracts using Move, SUI&apos;s
          </p>
        </div>

        <div className="rounded-2xl p-8 border border-white/50 hover:border-[#6fbcf0] transition-all">
          {/* Image with curved top */}
          <div className="w-full h-40 overflow-hidden rounded-t-2xl mb-6">
            <Image
              src={Event} // Updated image path
              alt="Description of the image"
              className="w-full h-full object-cover"
              width={500} // Set a width for the image
              height={300} // Set a height for the image
            />
          </div>
          {/* Content */}
          <h3 className="text-2xl font-bold text-white mb-4">
            NFT & Gaming
          </h3>
          <p className="text-gray-400">
            Develop dynamic NFT experiences and blockchain games using SUI&apos;s
          </p>
        </div>

        <div className="rounded-2xl p-8 border border-white/50 hover:border-[#6fbcf0] transition-all">
          {/* Image with curved top */}
          <div className="w-full h-40 overflow-hidden rounded-t-2xl mb-6">
            <Image
              src={Event} // Updated image path
              alt="Description of the image"
              className="w-full h-full object-cover"
              width={500} // Set a width for the image
              height={300} // Set a height for the image
            />
          </div>
          {/* Content */}
          <h3 className="text-2xl font-bold text-white mb-4">
            SUI MeetUp
          </h3>
          <p className="text-gray-400">
            Meetup
          </p>
        </div> 
      </div>
    </div>
  );
}
