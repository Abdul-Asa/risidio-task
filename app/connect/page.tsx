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
    <main className="flex flex-col gap-8 h-screen px-20 py-8 bg-[#E6E9F2]">
      <Header />
      <section className="flex flex-col h-full justify-center items-center">
        <h1 className="text-2xl font-extrabold">
          Choose the wallet to connect
        </h1>
        <div className="flex gap-6 p-16 justify-evenly w-full">
          {walletList.map((wallet) => (
            <Button
              key={wallet.name}
              variant={"ghost"}
              className=" size-40 bg-white rounded-xl flex justify-center items-center hover:border-2"
              onClick={() => {
                setUser({
                  id: "123",
                  name: "John Doe",
                  amount: 0,
                  currency: "BTC",
                  wallet: wallet.name,
                  nftCollections: [],
                });
                router.push("/");
              }}
            >
              <p>{wallet.name}</p>
            </Button>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ConnectWalletPage;
