"use client";
import {
    ThirdwebProvider,
    embeddedWallet,
    metamaskWallet,
    rainbowWallet,
    walletConnect,
    phantomWallet,
    en
} from "@thirdweb-dev/react";

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThirdwebProvider
            activeChain="mumbai"
            clientId="YOUR_CLIENT_ID"
            locale={en()}
            supportedWallets={[
                metamaskWallet({ recommended: true }),
                rainbowWallet({ recommended: true }),
                walletConnect(),
                phantomWallet(),
                embeddedWallet({
                    auth: {
                        options: [
                            "email",
                            "google",
                            "apple",
                            "facebook"
                        ],
                    },
                })
            ]}
        >
            {children}
        </ThirdwebProvider>
    )
};

export default Provider;