"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useAtom, useAtomValue } from "jotai";
import { applicationState, sidebarState } from "@/lib/jotai";
import SideBar from "./sidebar";

const Header = () => {
  const appState = useAtomValue(applicationState);
  const [trigger, setTrigger] = useAtom(sidebarState);

  return (
    <nav className="flex items-center justify-between ">
      <Link href={"/"}>
        <h1 className="lg:text-3xl font-extrabold uppercase">
          Marketplace
          <span className="lg:inline-block ml-[3px] size-[5px] hidden bg-black" />
        </h1>
      </Link>
      {appState.isLoggedIn ? (
        <Button variant={"outline"} onClick={() => setTrigger(true)}>
          Account
        </Button>
      ) : (
        <Link href={"/connect"} className="scale-75 sm:scale-100">
          <Button variant={"outline"}>Connect Wallet</Button>
        </Link>
      )}
      {appState.isLoggedIn && <SideBar {...appState.user} />}
    </nav>
  );
};

export default Header;
