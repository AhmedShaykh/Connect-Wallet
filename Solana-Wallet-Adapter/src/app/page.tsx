"use client";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const styles = {
    connect: {
        background: "linear-gradient(135deg 80%, #0269ad, #02eb9c 70%)",
        borderRadius: "10px",
        fontSize: "22px",
        padding: "2rem 2.2rem",
        fontWeight: "900px !important"
    }
};

const Home = () => {
    return (
        <div className="grid place-items-center h-screen">
            <WalletMultiButton style={styles.connect} />
        </div>
    )
};

export default Home;