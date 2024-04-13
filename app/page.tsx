import CollectionList from "@/components/collections";
import Footer from "@/components/footer";
import Header from "@/components/header";
import TrendingCarousel from "@/components/trending-carousel";
import { collectionItems } from "@/lib/mock-api";

export default function Home() {
  const trendingCollection = collectionItems.find((item) => item.trending);

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col gap-8 flex-grow px-20 py-8">
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
