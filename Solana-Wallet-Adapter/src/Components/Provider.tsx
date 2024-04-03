"use client";
import { FC, ReactNode, useMemo } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
require("@solana/wallet-adapter-react-ui/styles.css");
import { clusterApiUrl } from "@solana/web3.js";

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const network = WalletAdapterNetwork.Devnet;

    const endpoint = useMemo(() => {

        return clusterApiUrl(network);

    }, [network]);

    const wallets = useMemo(() => [
        new PhantomWalletAdapter()
    ], [network]);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
};

export default WalletContextProvider;