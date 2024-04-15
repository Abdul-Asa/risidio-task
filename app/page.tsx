import CollectionList from "@/components/collections";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import TrendingCarousel from "@/components/trending-carousel";
import { collectionItems } from "@/lib/mock-api";

export default function Home() {
  const trendingCollection = collectionItems.find((item) => item.trending);

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-grow lg:px-[80px] px-[47px] pt-[33px] pb-[153px]">
        <Header />
        {trendingCollection ? (
          <TrendingCarousel {...trendingCollection} />
        ) : (
          <TrendingCarousel {...collectionItems[0]} />
        )}
        <CollectionList />
      </div>
      <Footer />
    </main>
  );
}
