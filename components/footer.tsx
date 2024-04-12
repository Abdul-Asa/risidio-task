import { TowerControl } from "lucide-react";
const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-[#E6E9F2] p-10">
      <h1 className="text-2xl font-extrabold uppercase">
        Marketplace
        <span className="inline-block ml-[3px] w-[5px] h-[5px] bg-black" />
      </h1>
      <div className="flex items-center gap-4">
        <TowerControl size={24} />
        <TowerControl size={24} />
        <TowerControl size={24} />
        <TowerControl size={24} />
      </div>
    </footer>
  );
};

export default Footer;
