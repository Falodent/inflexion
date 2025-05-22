"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

// components
import Overview from "../overview";
import Frame from "@/components/frame";
import Stack from "@/components/stack";
import Demo from "@/components/demo";

// helpers
import {
  extractCatalystCalendar,
  extractKPITable,
  extractPeople,
  extractPoints,
  extractPunchQuotes,
  extractTOC,
  extractTone,
} from "@/helpers/extract-point";

// sections
import KeyTakeaways from "./key-takeaways";
import PeopleMentioned from "./people-mentioned";
import KPI from "./kpi";
import CatalystCalendar from "./catalyst-calendar";
import RiskSnapshot from "./risk-snapshot";
import PunchQuotes from "./punch-quotes";
import Keywords from "./keywords";
import TableOfContents from "./table-of-contents";

// types
import {
  CatalystEvent,
  FullContentType,
  PunchQuote,
  TOCData,
  ToneAndRiskData,
} from "@/types/content";
import Summary from "../summary";

interface Props {
  data: FullContentType;
  isLoading: boolean;
}

const Details = ({ data, isLoading }: Props) => {
  const [active, setActive] = useState<string>("Key_Takeaways");

  // content
  const [points, setPoints] = useState<string[]>([]);
  const [people, setPeople] = useState<string[]>([]);
  const [toc, setTOC] = useState<TOCData[]>([]);
  const [risk, setRisk] = useState<ToneAndRiskData | null>(null);
  const [quotes, setQuotes] = useState<PunchQuote[]>([]);
  const [catalyst, setCatalyst] = useState<CatalystEvent[]>([]);
  const [table, setTable] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && data?.investor_note) {
      setPoints(extractPoints(data?.investor_note));
      setPeople(extractPeople(data?.investor_note));
      setTOC(extractTOC(data?.investor_note));
      setRisk(extractTone(data?.investor_note));
      setQuotes(extractPunchQuotes(data?.investor_note));
      setCatalyst(extractCatalystCalendar(data?.investor_note));
      setTable(extractKPITable(data?.investor_note));
    }
  }, [data?.investor_note]);

  const elementRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data]);

  return (
    <section
      className={clsx(
        "lg:pl-[5%] w-full relative",
        "grid grid-cols-1 lg:grid-cols-[235px_1fr] gap-10 xl:gap-20"
      )}
    >
      <div className="lg:flex hidden flex-col">
        <div style={{ height }} />
        <Overview active={active} setActive={setActive} />
      </div>

      <Stack className="w-full !gap-10 !lg:gap-16">
        <div ref={elementRef}>
          <Summary data={data} isLoading={isLoading} />
        </div>

        <div className="mx-auto xl:mx-0 w-full max-w-[580px] lg:max-w-[770px] flex flex-col gap-10 md:gap-[62px] px-4 xl:px-0">
          <div className="flex lg:hidden">
            <Overview active={active} setActive={setActive} />
          </div>

          <section id="Key_Takeaways">
            <KeyTakeaways isLoading={isLoading} points={points} />
          </section>

          <PeopleMentioned isLoading={isLoading} people={people} />

          <Frame title="ANALYST TOOLBOX">
            <Stack spacing={62} className="mt-4">
              <section id="Fresh_KPIs">
                <KPI isLoading={isLoading} table={table} />
              </section>

              <CatalystCalendar isLoading={isLoading} catalyst={catalyst} />

              <section id="Products">
                <RiskSnapshot isLoading={isLoading} risk={risk} />
              </section>

              <PunchQuotes isLoading={isLoading} quotes={quotes} />
            </Stack>
          </Frame>

          <section id="Keywords">
            <Keywords isLoading={isLoading} keywords={data?.keywords} />
          </section>

          <section id="Table_of_Contents">
            <TableOfContents isLoading={isLoading} toc={toc} />
          </section>

          <Demo />
        </div>
      </Stack>
    </section>
  );
};

export default Details;
