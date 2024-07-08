import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";

import { NearContext } from "@/app/context";

export const WalletConnect = () => {
  const { signedAccountId, wallet } = useContext(NearContext);
  const [action, setAction] = useState(() => {});
  const [label, setLabel] = useState("Loading...");

  useEffect(() => {
    if (!wallet) return;

    if (signedAccountId) {
      setAction(() => wallet.signOut);
      setLabel(`Logout ${signedAccountId}`);
    } else {
      setAction(() => wallet.signIn);
      setLabel("Connect Wallet");
    }
  }, [signedAccountId, wallet]);

  return (
    <div className="cursor-pointer inline-flex items-center gap-2.5  rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho">
      <button className="btn btn-secondary" onClick={action}>
        {" "}
        {label}{" "}
      </button>
    </div>
  );
};
