import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

const Overview = ({
  active,
  setActive,
}: {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="sticky top-4 w-full mt-[28px]">
      <div
        role="button"
        onClick={() => setOpen(!open)}
        className="mb-4 mx-auto w-full max-w-[550px] h-15 pl-[28px] pr-4.5 lg:hidden flex items-center justify-between text-black border border-[#D7DADF] rounded-2xl cursor-pointer"
      >
        <p className="text-lg font-[700] leading-[28px]">Company Overview</p>

        <ChevronDown size={24} />
      </div>

      <div
        className={clsx(
          "w-full flex-col gap-5 lg:gap-10 hidden lg:flex",
          open && "!flex"
        )}
      >
        {[
          "Key_Takeaways",
          "Keywords",
          "Fresh_KPIs",
          "Products",
          "Table_of_Contents",
        ].map((item) => (
          <a
            href={`#${item}`}
            className={clsx(
              "px-5 rounded-2xl",
              "font-[700] text-lg md:text-xl leading-[28px] align-middle",
              active === item
                ? "bg-blue-200 text-blue-100 py-2 lg:py-4"
                : "text-ash-300"
            )}
            key={item}
            onClick={() => {
              setActive(item);
            }}
          >
            {item.split("_").join(" ")}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Overview;
