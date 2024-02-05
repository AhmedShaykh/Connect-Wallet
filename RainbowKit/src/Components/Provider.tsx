"use client";
import {
    RainbowKitProvider,
    getDefaultWallets,
    connectorsForWallets,
    darkTheme
} from "@rainbow-me/rainbowkit";
import {
    argentWallet,
    trustWallet,
    ledgerWallet
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
    polygonMumbai,
    sepolia,
    lineaTestnet
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const projectId = "WALLET_KEY";

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [polygonMumbai, sepolia, lineaTestnet],
    [publicProvider()]
);

const { wallets } = getDefaultWallets({
    appName: "RainbowKit Integrate Next.JS",
    projectId,
    chains,
});

const demoAppInfo = {
    appName: "RainbowKit Integrate Next.JS",
};

const connectors = connectorsForWallets([
    ...wallets,
    {
        groupName: "Other",
        wallets: [
            argentWallet({ projectId, chains }),
            trustWallet({ projectId, chains }),
            ledgerWallet({ projectId, chains })
        ]
    }
]);

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
});

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider
                chains={chains}
                appInfo={demoAppInfo}
                modalSize="compact"
                theme={darkTheme()}
            >
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    )
};

export default Provider;