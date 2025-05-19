import { Dispatch, SetStateAction, useState } from "react";
import clsx from "clsx";

// components
import Expand from "./expand";
import FilterCard from "./card";

// content
import { filters } from "@/content/filters/filters";

interface Props {
  active: string[];
  setActive: Dispatch<SetStateAction<string[]>>;
}

const Filters = ({ active, setActive }: Props) => {
  const [showAll, setShowAll] = useState(false);

  function handleAdd(text: string) {
    setActive((prev) => [...prev, text]);
  }

  function handleRemove(text: string) {
    const data = active.filter((item) => item !== text);
    setActive(data);
  }

  return (
    <section
      className={clsx("w-full grid items-start gap-3 grid-cols-[1fr_42px]")}
    >
      <div
        className={clsx(
          "w-full flex flex-wrap gap-3 transition-all ease-in-out duration-500 overflow-y-hidden",
          showAll ? "max-h-[1000px]" : "max-h-[45px]"
        )}
      >
        {filters.map((item) => (
          <FilterCard
            key={item}
            active={active}
            text={item}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />
        ))}
      </div>

      <Expand showAll={showAll} setShowAll={setShowAll} />
    </section>
  );
};

export default Filters;
