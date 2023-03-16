import { ConnectButton } from "@rainbow-me/rainbowkit";
import AddressTmp from "../../assets/imgs/address-tmp.png";
import goerliIcon from "../../assets/icons/eth.png";
import PillButton, { PillButtonFace, PillIcon } from "../Button/PillButton";
import css from "./ConnectButton.module.scss";
import { vendingAbi } from "../../abi/vending";
import { walletClient } from "../../hooks/useContract";
import { getAccount, parseEther } from "viem";

const Connect = () => {
  async function handleSpin() {
    const [address] = await walletClient.getAddresses();
    const account = getAccount(address);
    await walletClient.writeContract({
      address: "0x2518b7F258DD60BDA4B9abCF277539C61Cb59e1e",
      abi: vendingAbi,
      functionName: "spin",
      value: parseEther("0.005"),
      account,
    });
  }

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <>
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <PillButton
                    isFullWidth
                    disabled={!mounted}
                    onClick={openConnectModal}
                    className={css.connetWallet}
                  >
                    Connect Wallet
                  </PillButton>
                );
              }

              if (chain.unsupported) {
                return (
                  <PillButton
                    isFullWidth
                    face={PillButtonFace.WARNING}
                    onClick={openChainModal}
                  >
                    Wrong network
                  </PillButton>
                );
              }

              return (
                <div className={css.accountOptions}>
                  <PillButton
                    className={css.accountBtn}
                    face={PillButtonFace.SECONDARY}
                    icon={PillIcon.DOWN}
                    onClick={handleSpin}
                  >
                    <div className="address">Spin</div>
                  </PillButton>
                  <PillButton
                    className={css.accountBtn}
                    face={PillButtonFace.SECONDARY}
                    icon={PillIcon.DOWN}
                    onClick={openAccountModal}
                  >
                    <img
                      className={css.profileImage}
                      alt="profileImage"
                      src={AddressTmp}
                    />
                    <div className="address">{account.displayName}</div>
                  </PillButton>
                  <PillButton
                    className={css.networkIcon}
                    face={PillButtonFace.SECONDARY}
                    icon={PillIcon.DOWN}
                    onClick={openChainModal}
                  >
                    <img alt="ethereum network" src={goerliIcon} />
                  </PillButton>
                </div>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default Connect;
