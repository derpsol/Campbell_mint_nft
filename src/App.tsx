import { Route, Routes } from "react-router-dom";
import "./App.css";
import { WagmiConfig, configureChains, createClient } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  Theme,
  darkTheme,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import { ALCHEMY_ID, OPTIMISM_CHAIN, GOERLI_CHAIN } from "./constants/constants";
import { publicProvider } from "wagmi/providers/public";
import { merge } from "lodash";
import { RecoilRoot } from "recoil";

import { Home, PendingMotion, ViewBase } from "./views";

const { chains, provider } = configureChains(
  [GOERLI_CHAIN],
  [alchemyProvider({ apiKey: ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Perpetual-lp-tool",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: "#1D4ED8",
  },
} as Theme);

function App() {
  return (
    <RecoilRoot>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider theme={myTheme} chains={chains}>
          <Routes>
            <Route
              path="/pending"
              element={
                <ViewBase>
                  <PendingMotion />
                </ViewBase>
              }
            />
            <Route
              path="/"
              element={
                <ViewBase>
                  <Home />
                </ViewBase>
              }
            />
          </Routes>
        </RainbowKitProvider>
      </WagmiConfig>
    </RecoilRoot>
  );
}

export default App;
