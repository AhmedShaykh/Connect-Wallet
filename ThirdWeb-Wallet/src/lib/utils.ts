export const formatBalance = (rawBalance: string) => {

    const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);

    return balance;
};

export const formatChainAsNum = (chainIdHex: string) => {

    const chainIdNum = parseInt(chainIdHex);

    return chainIdNum;
};

export const formatAddress = (addr: string | undefined) => {

    if (!addr) return " ";

    if (addr.length < 10) return addr;

    const prefix = addr.substring(0, 7);

    const suffix = addr.substring(addr.length - 1);

    return `${prefix}...${suffix}`;
};