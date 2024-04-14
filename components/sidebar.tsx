import { cn } from "@/lib/utils";
import { ChevronsRight, ClipboardCopy, Copy } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { useAtom, useSetAtom } from "jotai";
import { sidebarState, userState } from "@/lib/jotai";
import { userType } from "@/lib/types";
import { Button } from "./ui/button";

const SideBar = ({
  id,
  amount,
  currency,
  wallet,
  nftCollections,
}: userType) => {
  const [trigger, setTrigger] = useAtom(sidebarState);
  const setUser = useSetAtom(userState);
  return (
    <div
      className={cn(
        trigger ? "translate-x-0" : "translate-x-full",
        "h-[700px] w-[400px] top-2 right-0 fixed z-20 pr-10",
        "transition-transform duration-500"
      )}
    >
      {trigger && (
        <div
          className="absolute bg-[#D4D4D43B] h-full w-1/2 -z-10  -translate-x-6 backdrop-blur-md rounded-2xl"
          onClick={() => setTrigger(false)}
        >
          <ChevronsRight size={18} className="mt-6 ml-1" />
        </div>
      )}
      <div className="border-2 border-primary bg-background rounded-3xl flex flex-col z-10 w-full h-full">
        <div className="flex justify-between  w-full p-6">
          <div className="flex gap-4 items-center">
            <Avatar className="size-10">
              <AvatarImage src={"/avatars/avatar2.svg"} alt={"Avatar"} />
              <AvatarFallback>Bro</AvatarFallback>
            </Avatar>
            <div className="flex items-center">
              <p className="font-normal text-xs">{id}</p>
              <Copy
                className="cursor-pointer ml-2 box-border"
                size={14}
                onClick={() => {
                  navigator.clipboard.writeText(id);
                }}
              />
            </div>
          </div>

          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => {
              setTrigger(false);
              setUser({
                id: "",
                name: "",
                amount: 0,
                currency: "",
                wallet: "",
                nftCollections: [],
              });
            }}
          >
            <Image
              src={"/icons/arrow.svg"}
              height={24}
              width={24}
              className="size-8"
              alt="Arrow icon"
            />
          </Button>
        </div>
        <div className="p-6 flex flex-col py-8 gap-2">
          <p className=" text-muted-foreground text-sm">In your wallet</p>
          <h1 className="font-semibold text-3xl">
            {amount} {currency}
          </h1>
        </div>
        <div className="p-6 flex flex-col overflow-y-scroll gap-5 min-h-80 w-full">
          <h2 className="text-[16px] font-bold">Your NFTs</h2>
          {nftCollections.length > 0 ? (
            nftCollections.map((nft) => (
              <div
                key={nft.id}
                className="h-40 rounded-[34px] flex  flex-shrink-0 relative overflow-hidden"
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
  );
};

export default SideBar;
