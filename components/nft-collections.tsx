import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const NFTPage = () => {
  return (
    <section className="flex flex-col py-8 gap-4">
      <div className="p-10 ">
        <div className="flex justify-between gap-20">
          <div className="w-full flex flex-col justify-between p-8">
            <div className="mb-6">
              <Badge className="text-black bg-[#FADFE4]">Trending Now</Badge>
            </div>
            <CardDescription className="text-xl">Collection</CardDescription>
            <CardTitle className="text-5xl font-extrabold tracking-wide">
              Night Sky
            </CardTitle>
            <div className="py-3 leading-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              blanditiis repudiandae laboriosam ullam excepturi fugit nobis
              dolorum, hic unde officia, saepe facilis aut aliquam. Voluptates
              placeat provident atque maxime necessitatibus.
            </div>
            <div className="flex gap-4 py-5">
              <Avatar className="size-12">
                <AvatarImage src="/avatar.svg" alt="avatar" />
                <AvatarFallback>Avatar Image</AvatarFallback>
              </Avatar>
              <div>
                <CardDescription className="text-[12px]">
                  Artist
                </CardDescription>
                <p>Léa Jacquot</p>
              </div>
            </div>
          </div>
          <div className="justify-center w-full flex">
            <Image
              src="/star.svg"
              alt="Picture"
              height={411}
              width={437}
              className="size-[400px]"
            />
          </div>
        </div>
      </div>
      <section className="flex flex-col py-10 gap-5 my-10">
        <h1 className="text-[24px] font-extrabold ">NFTs</h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </div>
      </section>
    </section>
  );
};

const CollectionCard = () => {
  return (
    <Link
      href="/collection"
      className="flex flex-col p-6 group bg-white rounded-[47px] shadow-tile cursor-pointer hover:shadow-hover border-none transition"
    >
      <div className="relative  bg-black/20 flex h-80 justify-center rounded-[34px]  overflow-hidden">
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
          Buy
        </Button>
        <div className="absolute inset-0 bg-black/60 hidden group-hover:block" />
      </div>
      <div className="flex items-center justify-between my-10">
        <p className="text-[24px] font-bold">Night sky</p>
        <Badge className="text-black bg-[#D4D3EB]">120 NFT</Badge>
      </div>
    </Link>
  );
};

export default NFTPage;
