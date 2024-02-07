"use client";
import {
    ThirdwebProvider,
    coinbaseWallet,
    embeddedWallet,
    metamaskWallet,
    rainbowWallet,
    walletConnect,
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
                coinbaseWallet(),
                walletConnect(),
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