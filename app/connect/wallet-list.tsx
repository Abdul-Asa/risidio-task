"use client";
import { Button } from "@/components/ui/button";
import { setUserCookie } from "@/lib/server-actions";
import { useSearchParams } from "next/navigation";
import { Wallet } from "@/db/schema";
import Image from "next/image";
import { toast } from "sonner";

export const WalletList = ({ wallets }: { wallets: Array<Wallet> }) => {
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("from") || "/";

  return wallets.map((wallet) => (
    <Button
      key={wallet.name}
      variant={"ghost"}
      className=" lg:w-[191px] lg:h-[174px] p-2 lg:p-10 md:size-32 size-16 bg-white rounded-[19px] flex justify-center items-center hover:border-2"
      onClick={() => {
        toast.success("Wallet connected successfully");
        setUserCookie(
          {
            walletId: wallet.id,
            address: wallet.address,
            wallet: wallet.name,
            isLoggedIn: true,
          },
          redirectPath
        );
      }}
    >
      <Image
        src={wallet.icon}
        alt={wallet.name}
        width={191}
        height={174}
        className="mix-blend-multiply"
      />
    </Button>
  ));
};
