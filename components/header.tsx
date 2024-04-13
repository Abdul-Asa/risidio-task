import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <nav className="flex items-center justify-between">
      <Link href={"/"}>
        <h1 className="text-3xl font-extrabold uppercase">
          Marketplace
          <span className="inline-block ml-[3px] w-[5px] h-[5px] bg-black" />
        </h1>
      </Link>
      <Link href={"connect"}>
        <Button variant={"outline"}>Connect Wallet</Button>
      </Link>
    </nav>
  );
};

export default Header;
