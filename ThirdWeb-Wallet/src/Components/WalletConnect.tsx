import { ConnectWallet } from "@thirdweb-dev/react";

const WalletConnect = () => {
    return (
        <div className="grid place-items-center h-screen">
            <ConnectWallet />
        </div>
    )
};

export default WalletConnect;