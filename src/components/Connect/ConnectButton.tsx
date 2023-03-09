import { ConnectButton } from '@rainbow-me/rainbowkit'
import AddressTmp from 'assets/images/address-tmp.png'
import ImageOptimism from 'assets/images/optimism.png'
import PillButton, {
    PillButtonFace,
    PillIcon,
} from '../Button/PillButton'
import css from './ConnectButton.module.scss'

const Connect = () => {
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
                                    >
                                        Connect Wallet
                                    </PillButton>
                                )
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
                                )
                            }

                            return (
                                <div className={css.accountOptions}>
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
                                        <div className="address">
                                            {account.displayName}
                                        </div>
                                    </PillButton>
                                    <PillButton
                                        face={PillButtonFace.SECONDARY}
                                        icon={PillIcon.DOWN}
                                        onClick={openChainModal}
                                    >
                                        <img
                                            alt="optimism"
                                            src={ImageOptimism}
                                        />
                                    </PillButton>
                                </div>
                            )
                        })()}
                    </>
                )
            }}
        </ConnectButton.Custom>
    )
}

export default Connect
