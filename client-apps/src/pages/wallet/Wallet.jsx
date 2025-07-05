import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import {clients} from "../../client";

const wallets = [createWallet('io.metamask')];

export default function Wallets() {
  return (
    <>
      <div className="relative">
        <div className="absolute sm:static -right-[55px] sm:right-0 -top-[25px] sm:top-0 scale-[0.70] sm:scale-none origin-left">
            <ConnectButton
              client={clients}
              wallets={wallets}
            />
        </div>
      </div>
    </>
  )
}
