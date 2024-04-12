import Footer from "@/components/footer";
import Header from "@/components/header";
import TrendingCarousel from "@/components/trending-carousel";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-grow px-20 py-8">
        <Header />
        <TrendingCarousel />

        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Components
        </h1>
        <div className="flex gap-5 p-8">
          <Button>This is a CTA</Button>
          <Button variant="secondary">This is a CTA</Button>
          <Button variant="outline" className="border-primary">
            This is a CTA
          </Button>
          <Button variant="link">This is a CTA</Button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
