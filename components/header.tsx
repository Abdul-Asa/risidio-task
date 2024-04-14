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
        <h1 className="text-3xl font-extrabold uppercase">
          Marketplace
          <span className="inline-block ml-[3px] w-[5px] h-[5px] bg-black" />
        </h1>
      </Link>
      {appState.isLoggedIn ? (
        <Button variant={"outline"} onClick={() => setTrigger(true)}>
          Account
        </Button>
      ) : (
        <Link href={"connect"}>
          <Button variant={"outline"}>Connect Wallet</Button>
        </Link>
      )}
      {appState.isLoggedIn && <SideBar {...appState.user} />}
    </nav>
  );
};

export default Header;
