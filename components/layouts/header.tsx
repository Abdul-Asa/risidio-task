import Link from "next/link";
import { Button } from "../ui/button";
import { getUserCookie } from "@/lib/server-actions";
import Image from "next/image";
import SideBar from "./sidebar";
import AccountButton from "./account-button";
import { getUserWalletNftCart, getWallet } from "../../db/queries";

const Header = async () => {
  const userSession = await getUserCookie();
  const walletId = Number(userSession.walletId);
  const wallet = (await getWallet(walletId)) || {
    id: 0,
    name: "Fake Wallet",
    icon: "/icons/metamask.svg",
    address: "Binance123",
    currency: "ETH",
    amount: 0.29,
  };

  const cart = await getUserWalletNftCart(walletId);

  return (
    <nav className="flex items-center flex-col gap-4 sm:flex-row justify-between ">
      <Link href={"/"}>
        <Image src="/icons/logo.svg" alt="logo" width={255} height={39} />
      </Link>
      {userSession.isLoggedIn ? (
        <AccountButton />
      ) : (
        <Link href={"/connect"} className="scale-75 sm:scale-100">
          <Button variant={"outline"}>Connect Wallet</Button>
        </Link>
      )}

      {userSession.isLoggedIn && <SideBar cart={cart} wallet={wallet} />}
    </nav>
  );
};

export default Header;
