import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { collectionItems } from "@/lib/mock-api";
import { collectionItemType } from "@/lib/types";

const CollectionList = () => {
  return (
    <section className="flex flex-col py-10 gap-5 mb-10">
      <h2 className="text-[24px] font-extrabold ">Collections</h2>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {collectionItems.map((collection) => (
          <CollectionCard key={collection.slug} {...collection} />
        ))}
      </div>
    </section>
  );
};

const CollectionCard = ({
  image,
  title,
  description,
  artist,
  slug,
  lowestPrice,
  highestPrice,
  numberOfNFTs,
  avatar,
  currency,
}: collectionItemType) => {
  return (
    <Link
      href={`/collections/${slug}`}
      className="flex flex-col p-6 group bg-white rounded-[47px] shadow-tile cursor-pointer hover:shadow-hover border-none transition"
    >
      <div className="relative h-52 bg-black/20 flex justify-center rounded-[34px]  overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="group-hover:scale-110 duration-500 ease-out transition-transform object-cover"
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
      <div className="flex items-center justify-between mt-10">
        <p className="text-[24px] font-bold line-clamp-1">{title}</p>
        <Badge className="text-black bg-[#E1EDD9]">{numberOfNFTs} NFT</Badge>
      </div>
      <div className="text-[14px] font-normal my-4 line-clamp-3">
        <p className="text-muted-foreground text-[12px]">
          Price Range : {lowestPrice}
          {currency} - {highestPrice}
          {currency}
        </p>
        <p>
          {description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        </p>
      </div>
      <div className="flex gap-4 py-5">
        <Avatar>
          <AvatarImage src={avatar} alt="Avatar Image" />
          <AvatarFallback className="text-xs text-center">
            {artist}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-[12px] text-muted-foreground ">Artist</p>
          <p>{artist}</p>
        </div>
      </div>
    </Link>
  );
};

export default CollectionList;
