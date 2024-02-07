"use client";
import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";

const WalletConnect = () => {
    return (
        <div className="grid place-items-center h-screen">
            <ConnectWallet
                theme={darkTheme({
                    colors: {
                        accentText: "#0acce6",
                        accentButtonBg: "#0acce6",
                    },
                })}
                modalSize={"compact"}
            />
        </div>
    )
};

export default WalletConnect;