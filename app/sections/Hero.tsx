"use client";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen px-8">
      <h1 className="text-[32px] leading-tight md:text-[20px] lg:text-[64px] font-bold text-white max-w-[90%] mb-16">
        Participate in all events and earn NFT badges.
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="rounded-2xl p-8 border border-white/50 hover:border-[#6fbcf0] transition-all">
          <h3 className="text-2xl font-bold text-white mb-4">Move Smart Contracts</h3>
          <p className="text-gray-400">
            Build secure and efficient smart contracts using Move, SUI&apos;s native programming language. 
            Earn badges for completing development challenges.
          </p>
        </div>

        <div className="rounded-2xl p-8 border border-white/50 hover:border-[#6fbcf0] transition-all">
          <h3 className="text-2xl font-bold text-white mb-4">DeFi Innovation</h3>
          <p className="text-gray-400">
            Create innovative DeFi solutions leveraging SUI&apos;s high throughput and 
            parallel execution capabilities. Showcase your financial protocols.
          </p>
        </div>

        <div className="rounded-2xl p-8 border border-white/50 hover:border-[#6fbcf0] transition-all">
    
          <h3 className="text-2xl font-bold text-white mb-4">NFT & Gaming</h3>
          <p className="text-gray-400">
            Develop dynamic NFT experiences and blockchain games using SUI&apos;s 
            object-centric model. Build the future of digital ownership.
          </p>
        </div>
      </div>
    </div>
  );
}
