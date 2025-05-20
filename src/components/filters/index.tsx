"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import clsx from "clsx";
import Skeleton from "react-loading-skeleton";

// components
import Expand from "./expand";
import FilterCard from "./card";

// services
import { useAllExecutives } from "@/services/executive.service";
import { useAllCompanies } from "@/services/company.service";

interface Props {
  activeExecutives: string[];
  setActiveExecutives: Dispatch<SetStateAction<string[]>>;
  activeCompanies: string[];
  setActiveCompanies: Dispatch<SetStateAction<string[]>>;
}

const Filters = ({
  activeExecutives,
  setActiveExecutives,
  activeCompanies,
  setActiveCompanies,
}: Props) => {
  const [showAll, setShowAll] = useState(false);

  const [executiveFilters, setExecutiveFilters] = useState<string[]>([]);
  const [companyFilters, setCompanyFilters] = useState<string[]>([]);

  function handleAdd(text: string, hook: Dispatch<SetStateAction<string[]>>) {
    hook((prev) => [...prev, text]);
  }

  function handleRemove(
    text: string,
    state: string[],
    hook: Dispatch<SetStateAction<string[]>>
  ) {
    const data = state.filter((item) => item !== text);
    hook(data);
  }

  const { data: executives, isLoading: isExecLoading } = useAllExecutives();
  const { data: companies, isLoading: isCompLoading } = useAllCompanies();

  useEffect(() => {
    if (executives) {
      setExecutiveFilters((prev) => [...prev, ...executives?.data]);
    }
  }, [executives]);

  useEffect(() => {
    if (companies) {
      setCompanyFilters((prev) => [...prev, ...companies?.data]);
    }
  }, [companies]);

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
        {(isExecLoading || isCompLoading) &&
          new Array(8)
            .fill({})
            .map((_, index) => (
              <Skeleton key={index} width={140} height={40} borderRadius={44} />
            ))}

        {(!isExecLoading || !isCompLoading) && (
          <>
            {executiveFilters.map((item) => (
              <FilterCard
                key={item}
                active={activeExecutives}
                text={item}
                handleAdd={(text) => handleAdd(text, setActiveExecutives)}
                handleRemove={(text) =>
                  handleRemove(text, activeExecutives, setActiveExecutives)
                }
              />
            ))}

            {companyFilters.map((item) => (
              <FilterCard
                key={item}
                active={activeCompanies}
                text={item}
                handleAdd={(text) => handleAdd(text, setActiveCompanies)}
                handleRemove={(text) =>
                  handleRemove(text, activeCompanies, setActiveCompanies)
                }
              />
            ))}
          </>
        )}
      </div>

      <Expand showAll={showAll} setShowAll={setShowAll} />
    </section>
  );
};

export default Filters;
