import Link from "next/link";
import { Button } from "../ui/button";
import { getUserCookie } from "@/lib/server-actions";
import Image from "next/image";
import SideBar from "./sidebar";
import AccountButton from "./account-button";

const Header = async () => {
  const userSession = await getUserCookie();

  return (
    <nav className="flex items-center justify-between ">
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

      {userSession.isLoggedIn && <SideBar {...userSession} />}
    </nav>
  );
};

export default Header;
