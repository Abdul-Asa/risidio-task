"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { collectionItemType, NftType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

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
    <section className="flex flex-col py-8 gap-4">
      <div className="p-10 ">
        <div className="flex justify-between gap-20">
          <div className="w-full flex flex-col justify-between p-8">
            <div className="mb-6">
              <Badge className="text-black bg-[#FADFE4]">Trending Now</Badge>
            </div>
            <p className="text-muted-foreground text-xl">Collection</p>
            <h1 className="text-5xl font-extrabold tracking-wide">{title}</h1>
            <div className="py-3 leading-7">{description}</div>
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
            className="size-[400px] rounded-[47px]"
          />
        </div>
      </div>
      <section className="flex flex-col py-10 gap-5 my-10">
        <h1 className="text-[24px] font-extrabold ">NFTs</h1>
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
}: NftType & { currency: string }) => {
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
          onClick={() => alert(title)}
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
