/* eslint-disable react/no-unescaped-entities */
"use client";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { collectionItemType, NftType } from "@/lib/types";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSetAtom } from "jotai";
import { sidebarState } from "@/lib/jotai";
import { useRouter } from "next/navigation";
import { getUserCookie, updateUserData } from "@/lib/server-actions";

const TrendingCarousel = ({
  slug,
  title,
  artist,
  avatar,
  nftList,
}: collectionItemType) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const setTrigger = useSetAtom(sidebarState);

  const handleBuy = async (item: NftType) => {
    const { isLoggedIn, nftCollections, ...others } = await getUserCookie();
    if (!isLoggedIn) router.push("/connect");
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

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 10000) {
          setCurrentIndex((currentIndex + 1) % nftList.length);
          return 0;
        }
        return oldProgress + 100;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, nftList.length]);

  const currentItem = nftList[currentIndex];

  return (
    <section className="flex flex-col gap-[15px] pt-[54px] pb-[61px]">
      <div className="flex gap-8  px-[25px]">
        {nftList.map((_, index) => (
          <Progress
            onClick={() => {
              setProgress(0);
              setCurrentIndex(index);
            }}
            key={index}
            value={
              index < currentIndex
                ? 100
                : index === currentIndex
                ? progress / 100
                : 0
            }
          />
        ))}
      </div>
      <div className="bg-[#E6E9F2] rounded-[30px] w-full h-[518px] lg:pr-[87px] lg:pt-[47px] lg:pb-[60px] lg:pl-[74px] lg:py-8 p-3">
        <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-8 lg:gap-20">
          <div className="lg:h-[411px] w-full lg:py-[24px]">
            <div className="mb-[37px]">
              <Badge className="text-black bg-[#FADFE4]">Trending Now</Badge>
            </div>
            <p className="text-[#617587] leading-[29.05px] lg:text-[24px]">
              {title} collection
            </p>
            <h1 className="text-2xl font-extrabold leading-[77.45px] lg:text-[64px]">
              {currentItem.title}
            </h1>
            <div className="flex gap-[15px] items-center pt-[14px] pb-[44px]">
              <Avatar className="size-[68px]">
                <AvatarImage src={avatar} alt={"Avatar"} />
                <AvatarFallback>{artist}</AvatarFallback>
              </Avatar>
              <div>
                <p className=" text-[#617587] text-[12px]">Artist</p>
                <p className=" leading-[29.05px] text-[24px]">{artist}</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:w-[514px] gap-4">
              <Button className="w-full" onClick={() => handleBuy(currentItem)}>
                Buy
              </Button>
              <Link href={`/collections/${slug}`} className="w-full">
                <Button variant={"outline"} className="w-full">
                  See Collection
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            height={411}
            width={437}
            className="lg:h-[411px] lg:w-[437px] rounded-[47px]"
          />
        </div>
      </div>
    </section>
  );
};

export default TrendingCarousel;
