import Image from "next/image";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import Link from "next/link";
import { CollectionWithNfts } from "@/db/schema";

const CollectionList = (collectionItems: CollectionWithNfts[]) => {
  return (
    <section className="flex flex-col pt-[60px] gap-[41px]">
      <h2 className="text-[24px] leading-[29.05px] font-extrabold ">
        Collections
      </h2>
      <div className="grid grid-cols-1 gap-[40px] sm:grid-cols-2 lg:grid-cols-3">
        {Object.values(collectionItems).map((collection) => (
          <CollectionCard key={collection.slug} {...collection} />
        ))}
      </div>
    </section>
  );
};

export const CollectionCard = ({
  image,
  title,
  description,
  artist,
  slug,
  lowestPrice,
  highestPrice,
  numberOfNfts,
  avatar,
  nfts,
}: CollectionWithNfts) => {
  return (
    <Link
      href={`/collections/${slug}`}
      className="flex flex-col p-[16px] group lg:h-[529px] bg-white rounded-[47px] shadow-tile cursor-pointer hover:shadow-hover border-none transition"
    >
      <div className="relative h-[227px] w-full bg-[#D9D9D9]/20 flex justify-center rounded-[34px]  overflow-hidden">
        <Image
          src={image}
          alt={title}
          height={227}
          width={391}
          className="group-hover:scale-110 w-full h-[227px] duration-500 ease-out transition-transform object-cover"
        />
        <Button
          variant={"secondary"}
          className="absolute bottom-1/2 z-10 left-1/2 -translate-x-1/2 translate-y-1/2 hidden group-hover:block"
        >
          Go to collection
          <span className="ml-2 font-extrabold transition-transform hover:translate-x-52 duration-500 ">
            →
          </span>
        </Button>
        <div className="absolute inset-0 bg-black/60 hidden group-hover:block" />
      </div>
      <div className="flex items-center sm:flex-row justify-between flex-col  pt-[40px] pb-[30px] px-[14px]">
        <p className="text-[24px] max-w-[300px] font-bold truncate">{title}</p>
        <Badge className="text-black bg-[#E1EDD9]">{numberOfNfts} NFT</Badge>
      </div>
      <div className=" px-[14px]">
        <p className="text-[#617587] leading-[16.94px] text-[14px]">
          Price Range : {lowestPrice}
          {nfts[0].currency} - {highestPrice}
          {nfts[0].currency}
        </p>
        <p className="text-[16px] leading-[24px] line-clamp-3">{description}</p>
      </div>
      <div className="flex gap-[17px] px-[14px] pb-[16px] items-center pt-[38px] ">
        <Avatar className="size-[40px]">
          <AvatarImage src={avatar} alt={"Avatar"} />
          <AvatarFallback>{artist}</AvatarFallback>
        </Avatar>
        <div>
          <p className=" text-[#617587] text-[12px]">Artist</p>
          <p className=" leading-[29.05px] text-[16px]">{artist}</p>
        </div>
      </div>
    </Link>
  );
};

export default CollectionList;
