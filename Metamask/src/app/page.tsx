"use client";
import WalletConnect from "@/Components/WalletConnect";
import { MetaMaskProvider } from "@metamask/sdk-react";
import { ClerkProvider } from "@clerk/nextjs";

const Home = () => {

    const host = typeof window !== "undefined" ? window.location.host : "defaultHost";

    const sdkOptions = {
        logging: { developerMode: false },
        checkInstallationImmediately: false,
        dappMetadata: {
            name: "Metamask Wallet Next.JS",
            url: host,
        },
    };

    return (
        <ClerkProvider>
            <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
                <WalletConnect />
            </MetaMaskProvider>
        </ClerkProvider>
    )
};

export default Home;