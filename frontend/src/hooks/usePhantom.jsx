import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { PhantomWalletName } from "@solana/wallet-adapter-wallets";
import { useBlog } from "../context/Blog";

const usePhantom = () => {
  const [connecting, setConnecting] = useState(false);
  const { connected, select, publicKey } = useWallet();
  const { user, disconnectWallet, posts, transactionPending, initUser } = useBlog();

  const onConnect = async () => {
    setConnecting(true);
    select(PhantomWalletName);
    await initUser();
  };

  useEffect(() => {
    if (user) {
      setConnecting(false);
    }
  }, [user]);

  return {
    connecting,
    connected,
    user,
    disconnectWallet,
    posts,
    publicKey,
    onConnect,
    transactionPending
  };
};

export default usePhantom;
