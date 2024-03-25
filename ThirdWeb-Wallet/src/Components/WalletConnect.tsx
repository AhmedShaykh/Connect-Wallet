"use client";
import { ConnectWallet, useAddress, useConnectionStatus, useDisconnect } from "@thirdweb-dev/react";

const WalletConnect = () => {

    const connectionStatus = useConnectionStatus();

    const disconnect = useDisconnect();

    const address = useAddress();

    if (connectionStatus === "connected") {
        return (
            <div className="grid place-items-center h-screen">
                <button
                    className="button"
                    onClick={disconnect}
                >
                    {address}
                </button>;
            </div>
        )
    }

    return (
        <div className="grid place-items-center h-screen">
            <ConnectWallet
                btnTitle="Connect Wallet"
                className="button"
                modalSize={"wide"}
            />
        </div>
    )
};

export default WalletConnect;