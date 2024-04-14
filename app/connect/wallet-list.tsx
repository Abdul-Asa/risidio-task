"use client";
import { Button } from "@/components/ui/button";
import { walletList } from "@/lib/mock-api";
import { setUserCookie } from "@/lib/server-actions";
import { useSearchParams } from "next/navigation";

export const WalletList = () => {
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("from") || "/";
  return walletList.map((wallet) => (
    <Button
      key={wallet.name}
      variant={"ghost"}
      className=" lg:size-40 size-20 bg-white rounded-xl flex justify-center items-center hover:border-2"
      onClick={() =>
        setUserCookie(
          {
            id: "STV6Q...4Z7WD",
            name: "John Doe",
            amount: 100,
            currency: "ETH",
            wallet: wallet.name,
            nftCollections: [],
            isLoggedIn: true,
          },
          redirectPath
        )
      }
    >
      <p className="text-xs lg:text-base">{wallet.name}</p>
    </Button>
  ));
};
