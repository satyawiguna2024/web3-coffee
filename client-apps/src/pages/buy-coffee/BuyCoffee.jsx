import { useState, useEffect } from "react";
import { TransactionButton, useActiveAccount } from "thirdweb/react";
import RecentMessage from "./RecentMessage";
import { prepareContractCall, readContract, toWei } from "thirdweb";
import { CONTRACT } from "../../client";
import { useNavigate } from "react-router";


export default function BuyCoffee() {
    const [amount, setAmount] = useState(0.01);
    const [nameUser, setNameUser] = useState("");
    const [message, setMessage] = useState("");
    const [totalCoffee, setTotalCoffee] = useState(null);

    const account = useActiveAccount();
    const navigate = useNavigate();

    useEffect(() => {
      if(!account) {
        navigate("/");
      }
    }, [navigate, account]);

    useEffect(() => {
    async function getTotal() {
      const result = await readContract({
        contract: CONTRACT,
        method: "getTotalCoffee",
      });
      setTotalCoffee(Number(result));
    }

    getTotal();
  }, []);

  return (
    <>
      <div className="container-costume flex flex-col md:flex-row items-start px-2 gap-2 mt-16">
          <div className="w-full md:w-[80%] border border-slate-500 rounded-md p-3">
            <h1 className="font-roboto font-medium text-2xl sm:text-3xl tracking-widest">Buy A Coffee</h1>
            <p className="font-roboto text-md sm:text-lg text-slate-400">Total Coffee: {totalCoffee}</p>

            {/* form */}
            <form>
              <div className="mt-5">
                <label htmlFor="donate" className="font-roboto font-medium text-md sm:text-xl">Donate:</label>
                <div className="flex rounded-lg overflow-hidden gap-x-1">
                  <input
                    id="donate"
                    step='0.01'
                    min='0.01'
                    required
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                    type="number"
                    className="px-3 py-2 w-full text-slate-800 bg-slate-200 shadow focus:outline-none"
                  />
                  <select
                    required
                    className="bg-slate-200 focus:outline-none"
                  >
                    <option value="ETH">ETH</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="name" className="font-roboto font-medium text-md sm:text-xl"> Name:</label>
                <input 
                  id="name"
                  type="text"
                  required
                  value={nameUser}
                  onChange={(e) => setNameUser(e.target.value)}
                  placeholder="Jhon"
                  className="px-3 py-2 w-full text-slate-800 bg-slate-200 shadow focus:outline-none rounded-lg"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="font-roboto font-medium text-md sm:text-xl"> Message:</label>
                <input 
                  id="message"
                  type="text"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hello Sir!"
                  className="px-3 py-2 w-full text-slate-800 bg-slate-200 shadow focus:outline-none rounded-lg"
                />
              </div>
            </form>

            {(nameUser && message) && (
              <TransactionButton
                transaction={() => {
                  const tx = prepareContractCall({
                    contract: CONTRACT,
                    method: 'buyCoffee',
                    params: [nameUser, message],
                    value: BigInt(toWei(amount.toString())),
                  })

                  return tx
                }}
                onTransactionConfirmed={() => {
                  alert("Thank you for the coffee!");
                  setAmount(0.01);
                  setNameUser('');
                  setMessage('')

                  window.location.reload();
                }}
                style={{
                  marginTop: "20px",
                }}
              >
                Confirm Transaction
              </TransactionButton>
            )}
          </div>
          <div className="w-full border border-slate-500 rounded-md p-3 overflow-y-scroll max-h-[600px]">
            <RecentMessage />
          </div>
      </div>
    </>
  );
}
