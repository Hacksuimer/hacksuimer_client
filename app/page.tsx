"use client";

import Header from "./sections/Header";
import Hero from "./sections/Hero";

// import '@suiet/wallet-kit/style.css';
// import { WalletProvider } from "@suiet/wallet-kit";


export default function Home() {
  return (
    <section className="mx-auto w-full max-w-[1000px] pt-4 md:pt-12 flex flex-col gap-4">
      <div>
{/* 
        <WalletProvider> */}
        <Header />
        <Hero />
        {/* </WalletProvider> */}
      
      </div>
    </section>
  );
}
