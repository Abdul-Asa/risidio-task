import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import NFTPage from "@/app/collections/[slug]/nft-collections";
import { collectionItems } from "@/lib/mock-api";

const CollectionPage = ({ params }: { params: { slug: string } }) => {
  const foundItem = collectionItems.find((item) => item.slug === params.slug);

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-grow lg:px-[80px] px-[47px] pt-[33px] pb-[94px]">
        <Header />
        {foundItem ? <NFTPage {...foundItem} /> : <h1>Not in collection</h1>}
      </div>
      <Footer />
    </main>
  );
};

export default CollectionPage;
