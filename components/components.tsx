import { CollectionCard } from "./collections";
import { NFTCard } from "../app/collections/[slug]/nft-collections";
import SideBar from "./layouts/sidebar";
import TrendingCarousel from "./trending-carousel";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { collectionItems } from "@/lib/mock-api";
const Components = () => {
  return (
    <div>
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
        Components
      </h1>
      <div className="p-5 gap-4 flex flex-col">
        <h2 className="text-2xl font-bold">Buttons</h2>
        <div className="flex flex-col lg:flex-row gap-5">
          <Button>This is a CTA</Button>
          <Button variant="secondary">This is a CTA</Button>
          <Button variant="outline" className="border-primary">
            This is a CTA
          </Button>
          <Button variant="link">This is a CTA</Button>
        </div>
      </div>
      <div className="p-5 gap-4 flex flex-col">
        <h2 className="text-2xl font-bold">Labels</h2>
        <div className="flex flex-col lg:flex-row w-fit gap-5">
          <Badge className="bg-[#837FEB]">Label</Badge>
          <Badge className="bg-[#F2738D]">Label</Badge>
          <Badge className="bg-[#D4D3EB]">Label</Badge>
          <Badge className="bg-[#F2C94C]">Label</Badge>
        </div>
      </div>
      <div className="p-5 gap-4 flex flex-col">
        <h2 className="text-2xl font-bold">Cards</h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <CollectionCard {...collectionItems[0]} />
          <NFTCard currency="ETH" {...collectionItems[0].nftList[3]} />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-bold">Carousel</h2>
        <div className="flex w-full scale-75">
          <TrendingCarousel {...collectionItems[1]} />
        </div>
      </div>
    </div>
  );
};

export default Components;
