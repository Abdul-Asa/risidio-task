"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { sidebarState } from "@/lib/jotai";
import { getUserCookie, updateUserData } from "@/lib/server-actions";
import { collectionItemType, NftType } from "@/lib/types";
import { useSetAtom } from "jotai";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const NFTPage = ({
  title,
  description,
  image,
  artist,
  avatar,
  currency,
  nftList,
}: collectionItemType) => {
  return (
    <section className="flex flex-col py-2 lg:py-8 gap-4">
      <div className="lg:p-10 ">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-3 lg:gap-20">
          <div className="w-full flex flex-col items-center lg:items-start justify-between lg:p-8">
            <div className="mb-6">
              <Badge className="text-black bg-[#FADFE4]">Trending Now</Badge>
            </div>
            <p className="text-muted-foreground text-xl">Collection</p>
            <h1 className="lg:text-5xl text-3xl font-extrabold tracking-wide">
              {title}
            </h1>
            <div className="py-3 text-center lg:text-start leading-7">
              {description}
            </div>
            <div className="flex gap-4 py-5">
              <Avatar className="size-12">
                <AvatarImage src={avatar} alt="avatar" />
                <AvatarFallback>{artist}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-muted-foreground text-[12px]">Artist</p>
                <p>{artist}</p>
              </div>
            </div>
          </div>
          <Image
            src={image}
            alt={title}
            height={411}
            width={437}
            className="lg:size-[400px] rounded-[47px]"
          />
        </div>
      </div>
      <section className="flex flex-col py-10 gap-5 my-10">
        <h2 className="text-[24px] font-extrabold ">NFTs</h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {nftList.map((nft) => (
            <NFTCard key={nft.id} currency={currency} {...nft} />
          ))}
        </div>
      </section>
    </section>
  );
};

const NFTCard = ({
  image,
  title,
  price,
  currency,
  id,
}: NftType & { currency: string }) => {
  const router = useRouter();
  const pathName = usePathname();
  const setTrigger = useSetAtom(sidebarState);

  const handleBuy = async (item: NftType) => {
    const { isLoggedIn, nftCollections, ...others } = await getUserCookie();
    if (!isLoggedIn) router.push(`/connect?from=${pathName}`);
    else {
      const itemExists = nftCollections.find((nft) => nft.id === item.id);
      if (!itemExists) {
        updateUserData({
          isLoggedIn,
          nftCollections: [item, ...nftCollections],
          ...others,
        });
      }
      setTrigger(true);
    }
  };
  return (
    <div className="flex flex-col p-6 group bg-white rounded-[47px] shadow-tile cursor-pointer hover:shadow-hover border-none transition">
      <div className="relative  bg-black/20 flex h-80 justify-center rounded-[34px]  overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="group-hover:scale-110 duration-500 ease-out transition-transform object-cover"
        />
        <Button
          variant={"secondary"}
          className="absolute bottom-1/2 z-10 left-1/2 -translate-x-1/2 translate-y-1/2 hidden group-hover:block"
          onClick={() => handleBuy({ image, title, price, id })}
        >
          Buy
        </Button>
        <div className="absolute inset-0 bg-black/60 hidden group-hover:block" />
      </div>
      <div className="flex items-center justify-between my-10">
        <p className="text-[24px] font-bold">{title}</p>
        <Badge className="text-black bg-[#D4D3EB]">
          {price} {currency}
        </Badge>
      </div>
    </div>
  );
};

export default NFTPage;
