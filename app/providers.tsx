// "use client";

// import { WalletProvider } from "@suiet/wallet-kit";
// import "@suiet/wallet-kit/style.css";

// export function Providers({ children }: { children: React.ReactNode }) {
//   return <WalletProvider>{children}</WalletProvider>;
// }
'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { networkConfig, network } from "./contracts/index"
import "@mysten/dapp-kit/dist/index.css";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork={network}>
        <WalletProvider>
          {children}
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}
