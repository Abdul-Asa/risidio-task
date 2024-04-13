import Components from "@/components/components";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

const ConnectWalletPage = () => {
  return (
    <main className="flex flex-col gap-8 h-screen px-20 py-8 bg-[#E6E9F2]">
      <Header />
      <section className="flex flex-col h-full justify-center items-center">
        <h1 className="text-2xl font-extrabold">
          Choose the wallet to connect
        </h1>
        <div className="flex gap-6 p-16 justify-evenly w-full">
          <Link
            href={"/"}
            className=" size-40 bg-white rounded-xl hover:border-2"
          />
          <Link
            href={"/"}
            className=" size-40 bg-white rounded-xl hover:border-2"
          />
          <Link
            href={"/"}
            className=" size-40 bg-white rounded-xl hover:border-2"
          />
        </div>
      </section>
    </main>
  );
};

export default ConnectWalletPage;
