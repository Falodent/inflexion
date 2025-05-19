import { ResponsiveImage, StaticImage } from "@/components/image";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getUTCFullYear();

  return (
    <footer className="w-full px-3 md:px-5 xl:pl-[94px] xl:pr-[91px] pt-[55px] xl:pt-32 pb-3 xl:pb-14 flex flex-col gap-[110px]">
      <div className="px-3 xl:px-0 flex flex-col md:flex-row gap-[26px] justify-between">
        <div className="flex gap-1 sm:gap-8 text-grey-200 md:mt-[13px] items-center justify-between sm:justify-start order-2 md:order-1">
          <p className="font-helvetica-neue text-sm leading-[24px]">
            &copy; {year} Inflexion.AI
          </p>

          <div className="flex gap-5 xl:gap-15">
            <Link
              href="/terms-of-use"
              className="font-helvetica-neue text-sm leading-[24px]"
            >
              Terms of Use
            </Link>

            <Link
              href="/privacy-policy"
              className="font-helvetica-neue text-sm leading-[24px]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="flex gap-4 order-1 md:order-2">
          {["instagram", "youtube", "linkedin", "twitter"].map((item) => (
            <a href="#" key={item}>
              <StaticImage
                src={`svg/socials/${item}.svg`}
                alt={item}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>

      <ResponsiveImage
        src="png/full-logo.png"
        alt="Inflexion Transcribe"
        size="w-full h-28"
      />
    </footer>
  );
};

export default Footer;
