import CollectionList from "@/app/(home)/collections";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import TrendingCarousel from "@/app/(home)/trending-carousel";
import { getAllCollections } from "@/db/queries";
// import { collectionItems } from "@/lib/mock-api";

export default async function Home() {
  const collectionItems = await getAllCollections();
  const trendingCollection = collectionItems.find((item) => item.trending);

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-grow lg:px-[80px] md:px-[47px] p-3 pt-[33px] pb-[153px]">
        <Header />
        {trendingCollection ? (
          <TrendingCarousel {...trendingCollection} />
        ) : (
          <TrendingCarousel {...collectionItems[0]} />
        )}
        <CollectionList {...collectionItems} />
      </div>
      <Footer />
    </main>
  );
}
