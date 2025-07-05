import { useActiveAccount } from "thirdweb/react";
import Wallets from "../wallet/Wallet";

// icons
import { TbCoffee } from "react-icons/tb";


export default function Navbar() {
  const account = useActiveAccount();

  return (
    <>
      <nav className="container-costume flex items-center justify-between px-2 py-4">
        <div className="flex items-center gap-x-2">
          <h1 className="font-raleway text-md md:text-xl tracking-wide">Buy Me A Coffee</h1>
          <TbCoffee className="hidden sm:block -mt-1 sm:size-[30px]" />
        </div>
        {account ? (
          <Wallets />
        ) : ('')}
      </nav>
    </>
  );
}
