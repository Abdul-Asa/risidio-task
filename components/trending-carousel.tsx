/* eslint-disable react/no-unescaped-entities */
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const TrendingCarousel = () => {
  return (
    <section className="flex flex-col py-8 gap-4">
      <div className="flex gap-4 px-8">
        <Progress value={100} />
        <Progress value={30} />
        <Progress />
        <Progress />
        <Progress />
        <Progress />
      </div>
      <div className="bg-[#E6E9F2] rounded-2xl px-10 py-8">
        <div className="flex justify-between gap-20">
          <div className="w-full flex flex-col justify-between p-8">
            <div className="mb-8">
              <Badge className="text-black bg-[#FADFE4]">Trending Now</Badge>
            </div>
            <p className="text-muted-foreground  text-xl">
              Night sky collection
            </p>
            <h1 className="text-5xl font-extrabold tracking-wide">
              With the Stars
            </h1>
            <div className="flex gap-4 py-5">
              <Avatar className="size-12">
                <AvatarImage src="/avatars/avatar.svg" alt="avatar" />
                <AvatarFallback>Avatar Image</AvatarFallback>
              </Avatar>
              <div>
                <p className=" text-muted-foreground text-[12px]">Artist</p>
                <p>Léa Jacquot</p>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <Button className="w-48">Buy</Button>
              <Button className="w-48" variant={"outline"}>
                See Collection
              </Button>
            </div>
          </div>
          <Image
            src="/images/star.svg"
            alt="Picture"
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
