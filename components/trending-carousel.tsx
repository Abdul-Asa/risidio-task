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
import { useAtomValue, useSetAtom } from "jotai";
import { applicationState, sidebarState, userState } from "@/lib/jotai";
import { useRouter } from "next/navigation";

const TrendingCarousel = ({
  slug,
  title,
  artist,
  avatar,
  nftList,
}: collectionItemType) => {
  const router = useRouter();
  const appState = useAtomValue(applicationState);
  const updateUser = useSetAtom(userState);
  const openTrigger = useSetAtom(sidebarState);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleBuy = (item: NftType) => {
    if (!appState.isLoggedIn) router.push("/connect");
    else {
      openTrigger(true);
      updateUser((prev) => ({
        ...prev,
        nftCollections: [...prev.nftCollections, item],
      }));
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
    <section className="flex flex-col py-8 gap-4">
      <div className="flex gap-4 px-8">
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
      <div className="bg-[#E6E9F2] rounded-2xl px-10 py-8">
        <div className="flex justify-between gap-20">
          <div className="w-full flex flex-col justify-between p-8">
            <div className="mb-8">
              <Badge className="text-black bg-[#FADFE4]">Trending Now</Badge>
            </div>
            <p className="text-muted-foreground  text-xl">{title} collection</p>
            <h1 className="text-5xl font-extrabold tracking-wide">
              {currentItem.title}
            </h1>
            <div className="flex gap-4 py-5">
              <Avatar className="size-12">
                <AvatarImage src={avatar} alt={"Avatar"} />
                <AvatarFallback>{artist}</AvatarFallback>
              </Avatar>
              <div>
                <p className=" text-muted-foreground text-[12px]">Artist</p>
                <p>{artist}</p>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <Button className="w-48" onClick={() => handleBuy(currentItem)}>
                Buy
              </Button>
              <Link href={`/collections/${slug}`}>
                <Button className="w-48" variant={"outline"}>
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
            className="size-[400px] rounded-[47px]"
          />
        </div>
      </div>
    </section>
  );
};

export default TrendingCarousel;
