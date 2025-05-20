import { UseFormRegisterReturn } from "react-hook-form";
import clsx from "clsx";

// components
import Logo from "@/components/logo";
import Search from "@/components/search";
import Button from "@/components/button";
import { useState } from "react";

interface Props {
  register: UseFormRegisterReturn;
}

const Navbar = ({ register }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={clsx(
        "w-full",
        isOpen ? "max-h-60 lg:max-h-24 flex flex-col gap-2" : "max-h-24"
      )}
    >
      <div
        className={clsx(
          "w-full h-24 flex items-center justify-between border border-black-200 bg-black-300 rounded-[20px]",
          "pl-[26px] pr-[22px] lg:px-9"
        )}
      >
        <Logo />

        <div className="w-full flex items-center justify-end gap-[19px] xl::gap-[118px]">
          <Search
            register={register}
            isOpen={isOpen}
            handleClick={() => setIsOpen((prev) => !prev)}
          />

          <div className="w-full shrink-0 max-w-[118px] lg:max-w-[165px]">
            <Button className="shrink-0">Subscribe</Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="px-5">
          <input
            type="search"
            className="flex lg:hidden w-full h-14 px-[25px] border border-navy-100 rounded-2xl outline-none leading-[40px] placeholder:text-grey-100"
            placeholder="Search companies, executives..."
            {...register}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
