import { CollectionCard } from "../(home)/collections";
import { NFTCard } from "../collections/[slug]/nft-collections";
import SideBar from "../../components/layouts/sidebar";
import TrendingCarousel from "../(home)/trending-carousel";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
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
          <CollectionCard
            id={0}
            title={"Night sky"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            slug={"night-sky"}
            avatar={"/avatars/avatar.svg"}
            image={"/images/clouds.svg"}
            trending={false}
            lowestPrice={0.12}
            highestPrice={0.18}
            numberOfNfts={6}
            artist={"Léa Jacquot"}
            nfts={[
              {
                id: 0,
                title: "Night is coming",
                image: "/images/clouds.svg",
                price: 0.12,
                currency: "BTC",
              },
              {
                id: 1,
                title: "With the stars",
                image: "/images/star.svg",
                price: 0.12,
                currency: "BTC",
              },
              {
                id: 2,
                title: "Summer",
                image: "/images/summer.svg",
                price: 0.12,
                currency: "BTC",
              },
            ]}
          />
          <NFTCard
            currency="ETH"
            id={0}
            title={"Night is coming"}
            image={"/images/quiet.svg"}
            price={0.12}
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-bold">Carousel</h2>
        <div className="flex w-full scale-75">
          <TrendingCarousel
            id={0}
            title={"Day Clouds"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            slug={"night-sky"}
            avatar={"/avatars/avatar.svg"}
            image={"/images/clouds.svg"}
            trending={false}
            lowestPrice={0.12}
            highestPrice={0.18}
            numberOfNfts={6}
            artist={"Léa Jacquot"}
            nfts={[
              {
                id: 0,
                title: "Night is coming",
                image: "/images/future.png",
                price: 0.12,
                currency: "BTC",
              },
              {
                id: 1,
                title: "With the stars",
                image: "/images/nature.png",
                price: 0.12,
                currency: "BTC",
              },
              {
                id: 2,
                title: "Summer",
                image: "/images/summer.svg",
                price: 0.12,
                currency: "BTC",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Components;
