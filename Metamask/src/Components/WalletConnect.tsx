"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
import { Button } from "@/Components/ui/button";
import { formatAddress } from "@/lib/utils";
import WalletButton from "./WalletButton";
import { useSDK } from "@metamask/sdk-react";
import {
    SignIn,
    SignOutButton,
    UserButton,
    useUser
} from "@clerk/nextjs";

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

    const { user } = useUser();

    const primaryWeb3Wallet = user?.primaryWeb3Wallet;

    return (
        <div className="grid place-items-center h-screen">
            <div className="flex flex-col items-center gap-4">
                <UserButton />

                <p>
                    Address:{" "}
                    {primaryWeb3Wallet ? primaryWeb3Wallet.web3Wallet : "Not found"}
                </p>
                <Button
                    className="px-8 py-4 text-md text-center text-[black] hover:bg-gray-200"
                >
                    <SignOutButton />
                </Button>
            </div>

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