"use client";
import { formatAddress } from "@/lib/utils";
import { useWalletInfo, useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";

const ConnectButton = () => {

    const { address, isDisconnected } = useAccount();

    const { disconnect } = useDisconnect();

    const { open } = useWeb3Modal();

    const { walletInfo } = useWalletInfo();

    if (isDisconnected) {
        return (
            <div className="grid place-items-center h-screen">
                <button
                    className="bg-blue-700 py-3 px-6 rounded-full text-lg font-bold"
                    onClick={() => open()}
                >
                    Connect Wallet
                </button>
            </div>
        )
    }

    console.log(walletInfo?.icon, walletInfo?.name);

    return (
        <div className="grid place-items-center h-screen">
            <w3m-button />

            <button
                className="bg-zinc-900 py-3 px-5 rounded-full text-md font-semibold"
                onClick={() => open({ view: "Account" }) || disconnect()}
            >
                {formatAddress(address)}
            </button>
        </div>
    )
};

export default ConnectButton;