import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-[#E6E9F2] p-10">
      {/* <h1 className="text-2xl font-extrabold uppercase">
        Marketplace
        <span className="inline-block ml-[3px] w-[5px] h-[5px] bg-black" />
      </h1> */}
      <Image
        src="/icons/logo.svg"
        alt="logo"
        height={27}
        width={176}
        // className="size-5"
      />
      <div className="flex items-center gap-6">
        <a href="https://www.facebook.com/" target="_blank">
          <Image
            src="/icons/facebook.svg"
            alt="Facebook"
            width={24}
            height={24}
            className="size-5"
          />
        </a>
        <a href="https://www.twitter.com/" target="_blank">
          <Image
            src="/icons/twitter.svg"
            alt="Twitter"
            width={24}
            height={24}
            className="size-5"
          />
        </a>
        <a href="https://www.discord.com/" target="_blank">
          <Image
            src="/icons/discord.svg"
            alt="Discord"
            width={24}
            height={24}
            className="size-5"
          />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <Image
            src="/icons/insta.svg"
            alt="Instagram"
            width={24}
            height={24}
            className="size-5"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
