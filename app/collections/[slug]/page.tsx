import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import NFTPage from "@/app/collections/[slug]/nft-collections";
import { getSingleCollection } from "@/db/queries";

const CollectionPage = async ({ params }: { params: { slug: string } }) => {
  const foundItem = await getSingleCollection(params.slug);

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-grow lg:px-[80px] md:px-[47px] p-3 pt-[33px] pb-[94px]">
        <Header />
        {foundItem ? <NFTPage {...foundItem} /> : <h1>Not in collection</h1>}
      </div>
      <Footer />
    </main>
  );
};

export default CollectionPage;
