import { useForm } from "react-hook-form";
import clsx from "clsx";

// components
import Logo from "@/components/logo";
import Search from "@/components/search";
import Button from "@/components/button";

const Navbar = () => {
  const { register } = useForm<{ search: string }>();

  return (
    <nav
      className={clsx(
        "w-full h-24 flex items-center justify-between border border-black-200 bg-black-300 rounded-[20px]",
        "pl-[26px] pr-[22px] lg:px-9"
      )}
    >
      <Logo />

      <div className="w-full flex items-center justify-end gap-[19px] xl::gap-[118px]">
        <Search register={register("search")} />

        <div className="w-full shrink-0 max-w-[118px] lg:max-w-[165px]">
          <Button className="shrink-0">Subscribe</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
