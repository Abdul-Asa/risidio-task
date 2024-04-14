"use client";
import Header from "@/components/header";
import Link from "next/link";
import { walletList } from "@/lib/mock-api";
import { useSetAtom, useAtomValue } from "jotai";
import { userState, applicationState } from "@/lib/jotai";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ConnectWalletPage = () => {
  const router = useRouter();
  // const isLoggedIn = useAtomValue(applicationState).isLoggedIn;
  const setUser = useSetAtom(userState);

  return (
    <main className="flex flex-col lg:gap-8 h-screen lg:px-20 px-4 py-8 bg-[#E6E9F2]">
      <Header />
      <section className="flex flex-col h-full justify-center items-center">
        <h1 className="lg:text-2xl text-lg font-extrabold">
          Choose the wallet to connect
        </h1>
        <div className="flex lg:flex-row flex-col gap-6 p-4 lg:p-16 items-center justify-evenly w-full">
          {walletList.map((wallet) => (
            <Button
              key={wallet.name}
              variant={"ghost"}
              className=" lg:size-40 size-20 bg-white rounded-xl flex justify-center items-center hover:border-2"
              onClick={() => {
                setUser({
                  id: "STV6Q...4Z7WD",
                  name: "John Doe",
                  amount: 120,
                  currency: "BTC",
                  wallet: wallet.name,
                  nftCollections: [],
                });
                router.push("/");
              }}
            >
              <p className="text-xs lg:text-base">{wallet.name}</p>
            </Button>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ConnectWalletPage;
