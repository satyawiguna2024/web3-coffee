import { useEffect, useState } from "react";
import { readContract } from "thirdweb";
import { formatDistanceToNow } from "date-fns";
import { CONTRACT } from "../../client";

export default function RecentMessage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await readContract({
          contract: CONTRACT,
          method: "getAllCoffee",
        });

        setMessages(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchMessages();
  }, []);

  return (
    <>
      <h1 className="font-roboto font-medium text-xl sm:text-2xl tracking-widest">
        Recent Message
      </h1>

      {messages.length === 0 ? (
        <div className="text-slate-400 font-roboto italic mt-5">
          💤 No messages have been received yet.
        </div>
      ) : (
        messages
          .slice()
          .reverse()
          .map((data, i) => {
            const timeAgo = formatDistanceToNow(
              new Date(Number(data.timestamp) * 1000),
              { addSuffix: true }
            );
            return (
              <div
                key={i}
                className="w-full border border-slate-300 shadow-md p-4 rounded-xl mt-5 flex flex-col sm:flex-row justify-between gap-2 sm:gap-4"
              >
                <div className="flex-1">
                  <h4 className="font-roboto text-base sm:text-lg md:text-xl text-justify break-words">
                    {data.name}
                  </h4>
                  <h6 className="font-roboto text-sm text-slate-700 mt-2">
                    From: {data.message}
                  </h6>
                </div>
                <div className="sm:text-right">
                  <h6 className="font-roboto text-sm text-slate-500 whitespace-nowrap">
                    {timeAgo === "less than a minute ago" ? "Now" : timeAgo}
                  </h6>
                </div>
              </div>
            );
          })
      )}
    </>
  );
}
