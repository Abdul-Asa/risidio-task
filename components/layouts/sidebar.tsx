"use client";
import { cn } from "@/lib/utils";
import { ChevronsRight, Copy } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { useAtom } from "jotai";
import { sidebarState } from "@/lib/jotai";
import { removeUserCookie } from "@/lib/server-actions";
import { CartWithNfts, Wallet } from "@/db/schema";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { toast } from "sonner";

const SideBar = ({
  cart,
  wallet,
  staticDisplay = false,
}: {
  cart?: CartWithNfts | null;
  wallet: Wallet;
  staticDisplay?: boolean;
}) => {
  const [trigger, setTrigger] = useAtom(sidebarState);

  useEffect(() => {
    if (trigger && !staticDisplay) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [staticDisplay, trigger]);

  return (
    <>
      <div
        className={cn(
          trigger && !staticDisplay
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
          "fixed inset-0 h-screen bg-black/60 z-10  transition-opacity ease-out duration-500"
        )}
      />
      <div
        className={cn(
          !staticDisplay && trigger ? "translate-x-0" : "translate-x-full",
          "h-[981px] w-[492px] top-0 right-0 fixed z-20 p-[16px]",
          "transition-transform duration-500"
        )}
      >
        <div className="border-2 h-[981px] border-[#02071D] bg-background rounded-[13px] flex flex-col relative">
          {!staticDisplay && trigger && (
            <div
              className="absolute bg-[#D4D4D43B] h-[975px] mt-[6px] w-[65px] -translate-x-1/2 backdrop-blur-md  -z-10 rounded-[13px]"
              onClick={() => setTrigger(false)}
            >
              <ChevronsRight size={21} className="mt-[34px] ml-[10px]" />
            </div>
          )}
          <div className="flex justify-between items-center w-full pt-[26px] px-[28px]">
            <div className="flex gap-4 items-center">
              <Avatar className="size-[50px] bg-[#29627F]"></Avatar>
              <div className="flex items-center">
                <p className="leaiding-[27.02px] text-[16px] ">
                  {wallet.address}
                </p>
                <Copy
                  className="cursor-pointer ml-2 box-border"
                  size={14}
                  onClick={() => {
                    toast.info("Copied to clipboard");
                    navigator.clipboard.writeText(wallet.address);
                  }}
                />
              </div>
            </div>

            <Button
              variant={"ghost"}
              className="h-fit w-fit p-0"
              onClick={() => {
                toast.success("Session logged out");
                setTrigger(false);
                removeUserCookie();
              }}
            >
              <Image
                src={"/icons/arrow.svg"}
                height={30}
                width={30}
                alt="Arrow icon"
              />
            </Button>
          </div>
          <div className="flex flex-col pt-[69px] pb-[30px] px-[32px]">
            <p className="text-[#7B7B7B] leading-[20.93px] text-[14px]">
              In your wallet
            </p>
            <h1 className="text-[#02071D] leading-[60.8px] font-semibold text-[36px]">
              {wallet.amount.toFixed(4)} {wallet.currency}
            </h1>
          </div>
          <div className="py-[66px] px-[32px] flex flex-col overflow-scroll gap-[28px]">
            <h2 className="text-[24px] font-extrabold leading-[29.05px] p-[11px] ">
              Your NFTs
            </h2>
            {!!cart?.nfts?.length ? (
              cart?.nfts?.map((nft) => (
                <div
                  key={nft.id}
                  className="h-[227px] rounded-[34px] flex flex-shrink-0 relative overflow-hidden"
                >
                  <Image
                    src={nft.image}
                    fill
                    className="object-cover"
                    alt={nft.title}
                  />
                </div>
              ))
            ) : (
              <div className="w-full justify-center items-center pt-10 flex flex-col gap-10">
                <p className="text-muted-foreground">
                  You don’t own any NFTs yet
                </p>
                <Button
                  onClick={() => {
                    setTrigger(false);
                  }}
                >
                  Start Shopping
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
