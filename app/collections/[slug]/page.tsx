import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import NFTPage from "@/app/collections/[slug]/nft-collections";
import { getSingleCollection } from "@/db/queries";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CollectionPage = async ({ params }: { params: { slug: string } }) => {
  const foundItem = await getSingleCollection(params.slug).catch(() => null);

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-grow lg:px-[80px] md:px-[47px] p-3 pt-[33px] pb-[94px]">
        <Header />
        {foundItem ? (
          <NFTPage {...foundItem} />
        ) : (
          <div className="flex flex-col gap-3 items-center justify-center h-full flex-1 ">
            <h1 className="text-4xl font-bold text-center text-gray-500">
              {params.slug} is not a collection
            </h1>
            <Link href="/">
              <Button variant={"link"}>Home</Button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default CollectionPage;
