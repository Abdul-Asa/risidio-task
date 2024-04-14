import Header from "@/components/layouts/header";
import { WalletList } from "./wallet-list";
import { getUserCookie } from "@/lib/server-actions";
import { redirect } from "next/navigation";

const ConnectWalletPage = async () => {
  const userSession = await getUserCookie();
  if (userSession.isLoggedIn) {
    redirect("/");
  }
  return (
    <main className="flex flex-col lg:gap-8 h-screen lg:px-20 px-4 py-8 bg-[#E6E9F2]">
      <Header />
      <section className="flex flex-col h-full justify-center items-center">
        <h1 className="lg:text-2xl text-lg font-extrabold">
          Choose the wallet to connect
        </h1>
        <div className="flex lg:flex-row flex-col gap-6 p-4 lg:p-16 items-center justify-evenly w-full">
          <WalletList />
        </div>
      </section>
    </main>
  );
};

export default ConnectWalletPage;
