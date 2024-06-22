import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { Suspense } from "react";
import PageItems from "./PageItems";

// Delay function

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-grow lg:px-[80px] md:px-[47px] p-3 pt-[33px] pb-[153px]">
        <Header />
        <Suspense
          fallback={
            <div className="flex w-full h-full items-center justify-center">
              <p>Loading...</p>
            </div>
          }
        >
          <PageItems />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
