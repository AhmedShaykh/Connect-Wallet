"use client";
import { formatAddress } from "@/lib/utils";
import {
    ConnectWallet,
    useAddress,
    useConnectionStatus,
    useDisconnect
} from "@thirdweb-dev/react";

const WalletConnect = () => {

    const connectionStatus = useConnectionStatus();

    const disconnect = useDisconnect();

    const address = useAddress();

    if (connectionStatus === "connected") {
        return (
            <div className="grid place-items-center h-screen">
                <button
                    className="userButton"
                    onClick={disconnect}
                >
                    {formatAddress(address)}
                </button>

                <ConnectWallet className="userButton" />
            </div>
        )
    }

    return (
        <div className="grid place-items-center h-screen">
            <ConnectWallet
                btnTitle="Connect Wallet"
                className="connectButton"
                modalSize={"wide"}
            />
        </div>
    )
};

export default WalletConnect;