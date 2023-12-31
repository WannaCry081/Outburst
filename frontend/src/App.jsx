import React, { useMemo } from "react";
import { Dashboard } from "./layouts";
import { Loading } from "./pages/Loading";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { BlogProvider } from "./context/Blog";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";

const WalletWrapper = ({ children }) => {
  const endpoint =
    "https://divine-lively-knowledge.solana-devnet.quiknode.pro/12bbf3b796e5dbfd6f66990196ce7818bfd629ef/";
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <BlogProvider>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </BlogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

const App = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <WalletWrapper>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
        </Routes>
      </WalletWrapper>
    </React.Suspense>
  );
};

export default App;
