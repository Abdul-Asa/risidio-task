import Header from "@/components/layouts/header";
import { WalletList } from "./wallet-list";
import { getUserCookie } from "@/lib/server-actions";
import { redirect } from "next/navigation";
import { db } from "@/db/intialize";

const ConnectWalletPage = async () => {
  const userSession = await getUserCookie();
  const wallets = await db.query.wallets.findMany();

  if (userSession.isLoggedIn) {
    redirect("/");
  }
  return (
    <main className="flex flex-col flex-grow lg:px-[80px]  pt-[33px] p-4 bg-[#E6E9F2]  h-screen">
      <Header />
      <section className="flex flex-col h-full justify-center items-center">
        <h1 className="lg:text-[32px] leading-[38.73px] text-lg font-extrabold">
          Choose the wallet to connect
        </h1>
        <div className="flex lg:flex-row flex-col gap-4 lg:gap-[63px] p-4 lg:p-16 items-center justify-center w-full">
          <WalletList wallets={wallets} />
        </div>
      </section>
    </main>
  );
};

export default ConnectWalletPage;
