import { Button } from "./ui/button";

const Header = () => {
  return (
    <nav className="flex items-center justify-between">
      <h1 className="text-3xl font-extrabold uppercase">
        Marketplace
        <span className="inline-block ml-[3px] w-[5px] h-[5px] bg-black" />
      </h1>
      <Button variant={"outline"}>Connect Wallet</Button>
    </nav>
  );
};

export default Header;
