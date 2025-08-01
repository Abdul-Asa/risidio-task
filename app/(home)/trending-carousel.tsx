/* eslint-disable react/no-unescaped-entities */
"use client";
import { Badge } from "../../components/ui/badge";
import Image from "next/image";
import { Progress } from "../../components/ui/progress";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSetAtom } from "jotai";
import { sidebarState } from "@/lib/jotai";
import { useRouter } from "next/navigation";
import { getUserCookie, updateCart } from "@/lib/server-actions";
import { CollectionWithNfts, Nft } from "@/db/schema";
import { toast } from "sonner";

const TrendingCarousel = ({
  slug,
  title,
  artist,
  avatar,
  nfts,
}: CollectionWithNfts) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const setTrigger = useSetAtom(sidebarState);

  const handleBuy = async (item: Nft) => {
    const { isLoggedIn, walletId } = await getUserCookie();
    if (!isLoggedIn) {
      router.push("/connect");
    } else {
      const result = await updateCart({
        nftId: item.id,
        walletId: Number(walletId),
      });
      if (result.success) {
        toast.success("Item added to cart");
        setTrigger(true);
      } else {
        toast.error(result.error || "Failed to add item to cart");
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 10000) {
          setCurrentIndex((currentIndex + 1) % nfts.length);
          return 0;
        }
        return oldProgress + 100;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, nfts.length]);

  const currentItem = nfts[currentIndex];

  return (
    <section className="flex flex-col gap-[15px] pt-[54px] pb-[61px]">
      <div className="flex gap-8  px-[25px]">
        {nfts.map((_, index) => (
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
      <div className="bg-[#E6E9F2] rounded-[30px] w-full lg:h-[518px] xl:pr-[87px] xl:pt-[47px] xl:pb-[60px] xl:pl-[74px] p-8">
        <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-8 ">
          <div className="lg:h-[411px] lg:items-start items-center flex flex-col  w-full lg:py-[24px]">
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
                <p className=" text-[#617587] leading-[14.52px] text-[12px]">
                  Artist
                </p>
                <p className=" leading-[29.05px] text-[24px]">{artist}</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row md:w-96 w-full xl:w-[514px] gap-4">
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
            className="xl:h-[411px] xl:w-[437px] md:size-80 rounded-[47px]"
          />
        </div>
      </div>
    </section>
  );
};

export default TrendingCarousel;
