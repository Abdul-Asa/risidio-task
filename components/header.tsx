import Link from "next/link";
import { Button } from "./ui/button";
import { getUserCookie } from "@/lib/server-actions";
import SideBar from "./sidebar";
import AccountButton from "./account-button";

const Header = async () => {
  const userSession = await getUserCookie();

  return (
    <nav className="flex items-center justify-between ">
      <Link href={"/"}>
        <h1 className="lg:text-3xl font-extrabold uppercase">
          Marketplace
          <span className="lg:inline-block ml-[3px] size-[5px] hidden bg-black" />
        </h1>
      </Link>
      {userSession.isLoggedIn ? (
        <AccountButton />
      ) : (
        <Link href={"/connect"} className="scale-75 sm:scale-100">
          <Button variant={"outline"}>Connect Wallet</Button>
        </Link>
      )}

      {userSession.isLoggedIn && <SideBar {...userSession} />}
    </nav>
  );
};

export default Header;
