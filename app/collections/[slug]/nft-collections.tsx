"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { sidebarState } from "@/lib/jotai";
import { getUserCookie, updateCart } from "@/lib/server-actions";
import { useSetAtom } from "jotai";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { CollectionWithNfts, Nft } from "@/db/schema";
import { toast } from "sonner";

const NFTPage = ({
  title,
  description,
  image,
  artist,
  avatar,
  nfts,
}: CollectionWithNfts) => {
  return (
    <section className="flex flex-col py-2 pt-10 lg:pt-[130px] gap-[134px]">
      <div className=" lg:pr-[87px] lg:pl-[74px] flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-3 lg:gap-20">
        <div className="w-full h-[411px] flex flex-col items-center lg:items-start">
          <div className="mb-[37px]">
            <Badge className="text-black bg-[#FADFE4]">Trending Now</Badge>
          </div>
          <p className="text-[#617587] leading-[29.05px] lg:text-[24px]">
            Collection
          </p>
          <h1 className="text-2xl font-extrabold leading-[77.45px] lg:text-[64px]">
            {title}
          </h1>
          <div className="pt-[12px] pb-[29px] text-[16px] text-center lg:text-start leading-[36.32px]">
            {description}
          </div>
          <div className="flex gap-[15px] items-center pb-[26px]">
            <Avatar className="size-[68px]">
              <AvatarImage src={avatar} alt={"Avatar"} />
              <AvatarFallback>{artist}</AvatarFallback>
            </Avatar>
            <div>
              <p className=" text-[#617587] leading-[14.52px] text-[12px]">
                Artist
              </p>
              <p className=" leading-[29.05px] text-[24px]">{artist}</p>
            </div>
          </div>
        </div>
        <Image
          src={image}
          alt={title}
          height={411}
          width={437}
          className=" rounded-[47px]"
        />
      </div>

      <section className="flex flex-col gap-[54px]">
        <h2 className="text-[24px] leading-[29.05px] font-extrabold ">NFTs</h2>
        <div className="grid grid-cols-1 gap-y-[30px] gap-x-[40px] sm:grid-cols-2 lg:grid-cols-3">
          {nfts.map((nft) => (
            <NFTCard key={nft.id} {...nft} />
          ))}
        </div>
      </section>
    </section>
  );
};

export const NFTCard = ({ image, title, price, currency, id }: Nft) => {
  const router = useRouter();
  const pathName = usePathname();
  const setTrigger = useSetAtom(sidebarState);

  const handleBuy = async (item: Nft) => {
    const { isLoggedIn, walletId } = await getUserCookie();
    if (!isLoggedIn) {
      router.push(`/connect?from=${pathName}`);
    } else {
      await updateCart({ nftId: item.id, walletId: Number(walletId) })
        .then(() => toast.success("Item added to cart"))
        .catch((err) => toast.error(err.message));
      setTrigger(true);
    }
  };
  return (
    <div className="flex flex-col p-[16px] group bg-white rounded-[47px] shadow-tile cursor-pointer hover:shadow-hover transition">
      <div className="relative bg-[#D9D9D9]/20 flex h-[345px]  justify-center rounded-[34px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="group-hover:scale-110 duration-500  ease-out transition-transform object-cover"
        />
        <Button
          variant={"secondary"}
          className="absolute bottom-1/2 z-10 left-1/2 -translate-x-1/2 translate-y-1/2 hidden group-hover:block"
          onClick={() => handleBuy({ image, title, price, id, currency })}
        >
          Buy
        </Button>
        <div className="absolute inset-0 bg-black/60 hidden group-hover:block" />
      </div>
      <div className="flex items-center sm:flex-row justify-between flex-col  px-[5px] py-[42px]">
        <p className="text-[24px] max-w-[300px] font-bold truncate">{title}</p>
        <Badge className="text-black bg-[#D4D3EB]">
          {price} {currency}
        </Badge>
      </div>
    </div>
  );
};

export default NFTPage;
