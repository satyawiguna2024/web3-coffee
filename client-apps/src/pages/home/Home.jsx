import { useEffect } from "react";
import { useNavigate } from 'react-router';
import { useActiveAccount } from "thirdweb/react";
import Wallets from "../wallet/Wallet";
import CoffeeImage from "../../assets/coffee.png";

export default function Home() {
  const account = useActiveAccount();
  const navigate =  useNavigate();

  useEffect(() => {
    if(account) {
      navigate("/buy-coffee");
    }
  }, [navigate, account])
  return (
    <>
      <div className="container-costume px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 mt-16">
        {/* Gambar Kopi */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={CoffeeImage}
            alt="coffee-image"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover"
          />
        </div>

        {/* Teks dan Wallet */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h5 className="font-roboto font-medium text-base sm:text-lg tracking-wide text-slate-700">
            Have coffee together in the digital world -
          </h5>
          <h3 className="font-roboto font-bold text-2xl sm:text-3xl md:text-4xl mt-2 mb-9 tracking-wide text-slate-900">
            Buy Me a Coffee via crypto ☕️
          </h3>
          <div className="flex justify-center lg:justify-start ml-24 mt-2 sm:ml-0 sm:mt-0">
            <Wallets />
          </div>
        </div>
      </div>
    </>
  );
}
