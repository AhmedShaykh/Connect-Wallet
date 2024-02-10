import * as React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const ConnectWallet = () => {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {

                const ready = mounted && authenticationStatus !== "loading";

                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus || authenticationStatus === "authenticated");

                return (
                    <div
                        {...(!ready && {
                            "aria-hidden": true,
                            style: {
                                opacity: 0,
                                pointerEvents: "none",
                                userSelect: "none",
                            },
                        })}
                    >
                        {(() => {

                            if (!connected) {
                                return (
                                    <button
                                        className="py-4 px-6 text-md font-bold rounded-full cursor-pointer bg-gradient-to-r from-cyan-600 via-blue-800 to-purple-700"
                                        onClick={openConnectModal}
                                    >
                                        Connect Wallet
                                    </button>
                                );
                            }

                            return (
                                <div className="flex flex-row gap-6 pb-2 md:pb-0">
                                    <button
                                        className="p-4 rounded-lg flex gap-1 items-center bg-[#1A1B1F] hover:bg-[#141417]"
                                        onClick={openChainModal}
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background: chain.iconBackground,
                                                    width: 22,
                                                    height: 22,
                                                    borderRadius: 999,
                                                    overflow: "hidden",
                                                    marginRight: 4,
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <img
                                                        alt={chain.name ?? "Chain icon"}
                                                        src={chain.iconUrl}
                                                        style={{ width: 20, height: 20 }}
                                                    />
                                                )}
                                            </div>
                                        )}

                                        <p className="text-md">{chain.name}</p>
                                    </button>

                                    <button
                                        className="bg-[#1A1B1F] hover:bg-[#141417] p-4 rounded-lg"
                                        onClick={openAccountModal}
                                    >
                                        {account.displayName}
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};

export default ConnectWallet;