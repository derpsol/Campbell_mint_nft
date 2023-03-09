import { Route, Switch, HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { merge } from "lodash";

import { Home, PendingMotion, ViewBase } from "./views";
import { Web3ContextProvider } from "./hooks";

import {
  RainbowKitProvider,
  Theme,
  darkTheme,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import { WagmiConfig, configureChains, createClient } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ALCHEMY_ID, OPTIMISM_CHAIN } from "./constants/constants";

const { chains, provider } = configureChains(
  [OPTIMISM_CHAIN],
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
          <Web3ContextProvider>
            <HashRouter>
              <ViewBase>
                <Switch>
                  <Route path="/pending">
                    <PendingMotion />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </ViewBase>
            </HashRouter>
          </Web3ContextProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </RecoilRoot>
  );
}

export default App;
