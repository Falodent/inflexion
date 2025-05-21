import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

const Overview = ({
  active,
  setActive,
}: {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="w-full mt-[28px] flex-col gap-10 hidden lg:flex">
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
            "font-[700] text-xl leading-[28px] align-middle",
            active === item ? "bg-blue-200 text-blue-100 py-4" : "text-ash-300"
          )}
          key={item}
          onClick={() => setActive(item)}
        >
          {item.split("_").join(" ")}
        </a>
      ))}
    </div>
  );
};

export default Overview;
