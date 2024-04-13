import CollectionList from "@/components/collections";
import Footer from "@/components/footer";
import Header from "@/components/header";
import TrendingCarousel from "@/components/trending-carousel";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col gap-8 flex-grow px-20 py-8">
        <Header />
        <TrendingCarousel />
        <CollectionList />
      </div>
      <Footer />
    </main>
  );
}
