import { getAllCollections } from "@/db/queries";
import CollectionList from "./collections";
import TrendingCarousel from "./trending-carousel";

export default async function PageItems() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(15000);

  const collectionItems = await getAllCollections();
  const trendingCollection = collectionItems.find((item) => item.trending);
  return (
    <>
      {trendingCollection ? (
        <TrendingCarousel {...trendingCollection} />
      ) : (
        <TrendingCarousel {...collectionItems[0]} />
      )}
      <CollectionList {...collectionItems} />
    </>
  );
}
