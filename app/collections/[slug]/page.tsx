import Footer from "@/components/footer";
import Header from "@/components/header";
import NFTPage from "@/components/nft-collections";
import { collectionItems } from "@/lib/mock-api";

const CollectionPage = ({ params }: { params: { slug: string } }) => {
  const foundItem = collectionItems.find((item) => item.slug === params.slug);

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col gap-8 flex-grow px-20 py-8">
        <Header />

        {foundItem ? <NFTPage {...foundItem} /> : <h1>Not in collection</h1>}
      </div>
      <Footer />
    </main>
  );
};

export default CollectionPage;
