import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const CollectionList = () => {
  return (
    <section className="flex flex-col py-10 gap-5 mb-10">
      <h1 className="text-[24px] font-extrabold ">Collections</h1>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        {/* <CollectionCard /> */}
      </div>
    </section>
  );
};

const CollectionCard = () => {
  return (
    <Link
      href="/collections"
      className="flex flex-col p-6 group bg-white rounded-[47px] shadow-tile cursor-pointer hover:shadow-hover border-none transition"
    >
      <div className="relative h-52 bg-black/20 flex justify-center rounded-[34px]  overflow-hidden">
        <Image
          src="/clouds.svg"
          alt="Collection Image"
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
        <p className="text-[24px] font-bold">Night sky</p>
        <Badge className="text-black bg-[#E1EDD9]">120 NFT</Badge>
      </div>
      <div className="text-[14px] font-normal my-4 line-clamp-3">
        <CardDescription className="text-[12px]">
          Price Range : 0.12BTC - 0.18BTC
        </CardDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        scelerisque, purus nec dignissim. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nunc scelerisque, purus nec dignissim.
      </div>
      <div className="flex gap-4 py-5">
        <Avatar>
          <AvatarImage src="/avatar.svg" alt="avatar" />
          <AvatarFallback>Avatar Image</AvatarFallback>
        </Avatar>
        <div>
          <CardDescription className="text-[12px]">Artist</CardDescription>
          <p>Léa Jacquot</p>
        </div>
      </div>
    </Link>
  );
};

export default CollectionList;
