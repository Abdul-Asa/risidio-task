import Footer from "@/components/footer";
import Header from "@/components/header";
import NFTPage from "../../components/nft-collections";

const ComponentsPage = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col gap-8 flex-grow px-20 py-8">
        <Header />
        <NFTPage />
      </div>
      <Footer />
    </main>
  );
};

export default ComponentsPage;
