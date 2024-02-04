"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
import { Button } from "@/Components/ui/button";
import { formatAddress } from "@/lib/utils";
import WalletButton from "./WalletButton";
import { useSDK } from "@metamask/sdk-react";

const WalletConnect = () => {

    const { sdk, connected, connecting, account } = useSDK();

    const connect = async () => {

        try {

            await sdk?.connect();

        } catch (err) {

            console.warn(`No Accounts Found`, err);

        }
    };

    const disconnect = () => {

        if (sdk) {

            sdk.terminate();

        }

    };

    return (
        <div className="grid place-items-center h-screen">
            {connected ? (
                <Popover>
                    <PopoverTrigger>
                        <Button>
                            {formatAddress(account)}
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent className="mt-2 w-44 bg-gray-100 border rounded-md shadow-lg right-0 z-10 top-10">
                        <Button
                            className="block w-full pl-2 pr-4 py-2 text-left text-[#F05252] hover:bg-gray-200"
                            onClick={disconnect}
                        >
                            Disconnect
                        </Button>
                    </PopoverContent>
                </Popover>
            ) : (
                <>
                    <WalletButton
                        connecting={connecting}
                        connect={connect}
                    />
                </>
            )}
        </div>
    )
};

export default WalletConnect;