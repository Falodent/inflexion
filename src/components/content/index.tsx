import { MicVocal, FileText } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

// component
import { ResponsiveImage } from "../image";
import Stack from "../stack";
import ListItem from "./list-item";
import Button from "../button";
import Circle from "../circle";

// types
import { ContentType } from "@/types/content";
import { convertDate } from "@/helpers/convert-date";
import { extractPoints } from "@/helpers/extract-point";

interface Props {
  data: ContentType;
  isSubpage?: boolean;
}

const Content = ({ data, isSubpage }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // convert date string to DD MM, YYYY
  const date = convertDate(data?.created_date);

  // convert string to bullet points
  const points = extractPoints(data?.investor_note);

  return (
    <Stack
      spacing={14}
      className={clsx(
        "group w-full rounded-4xl border border-grey-600 !gap-2 !lg:gap-[14px] transition-all ease-in-out duration-300 card",
        "py-[26px] lg:pt-[30px] pb-8 pr-3 lg:pr-[35px] pl-3 lg:pl-4 hover:bg-grey-500"
      )}
    >
      <div className="pl-[13px] lg:pl-[15px] flex flex-col items-start lg:flex-row lg:items-center gap-5">
        <ResponsiveImage
          src={`png/avatar.png`}
          alt={data?.executive_name}
          size="w-12 h-12 lg:w-14 lg:h-14 shrink-0"
        />

        <Stack spacing={2}>
          <h3 className="text-lg lg:text-xl font-[700] leading-[24px] text-black-600">
            {data?.title}
          </h3>

          <div className="flex items-center gap-2 lg:gap-3 text-navy-300 text-xs lg:text-base text-center">
            {isSubpage ? (
              <p className="font-[500] leading-[21.8px]">
                {data?.executive_name}
              </p>
            ) : (
              <Link
                href={`/executives?name=${data?.executive_name}&company=${
                  data?.company_name || "None"
                }`}
                className="font-[500] leading-[21.8px]"
              >
                {data?.executive_name}
              </Link>
            )}

            <Circle />

            <p className="font-[500] leading-[21.8px]">
              {data?.company_name || "None"}
            </p>

            <Circle />

            <div className="flex items-center gap-2 lg:gap-2.5">
              <MicVocal strokeWidth={3} size={16} />
              <p className="text-xs lg:text-sm font-[700] leading-[40px] tracking-[5%] uppercase">
                {data?.source}
              </p>
            </div>

            <Circle />

            <p className="font-[500] leading-[21.8px] uppercase">{date}</p>
          </div>
        </Stack>
      </div>

      <h4 className="pl-[14px] lg:text-lg leading-[26px] lg:leading-[28px] tracking-[0.2px] font-[500] text-navy-300 line-clamp-2">
        {data?.description}
      </h4>

      <Stack spacing={4} className={clsx("pl-2 lg:px-4 mt-[3px]")}>
        {points?.map((item, index, items) => (
          <ListItem
            index={index}
            data={items}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            text={item}
            key={index}
          />
        ))}
      </Stack>

      <div className="mt-[13px] pl-2 lg:pl-[15px]">
        <Button
          variant="filledLight"
          size="sm"
          className="flex items-center justify-center gap-2.5 transition-all ease-in-out duration-500 group-hover:bg-grey-700"
        >
          <FileText size={24} color="#878D98" />
          <p className="text-lg font-[700] leading-none">Full Summary</p>
        </Button>
      </div>
    </Stack>
  );
};

export default Content;
