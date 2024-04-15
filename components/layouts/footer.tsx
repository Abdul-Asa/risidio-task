import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-[#E6E9F2] lg:h-[98px] py-8  lg:py-0 pl-[46px] pr-[53px]">
      <Image src="/icons/logo.svg" alt="logo" height={27} width={176} />
      <div className="flex items-center h-[26px] gap-[42px]">
        <a href="https://www.facebook.com/" target="_blank">
          <Image
            src="/icons/facebook.svg"
            alt="Facebook"
            width={14}
            height={26}
          />
        </a>
        <a href="https://www.twitter.com/" target="_blank">
          <Image
            src="/icons/twitter.svg"
            alt="Twitter"
            width={26}
            height={23}
          />
        </a>
        <a href="https://www.discord.com/" target="_blank">
          <Image
            src="/icons/discord.svg"
            alt="Discord"
            width={22}
            height={24}
          />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <Image
            src="/icons/insta.svg"
            alt="Instagram"
            width={22}
            height={22}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
