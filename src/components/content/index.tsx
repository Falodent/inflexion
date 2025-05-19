import { MicVocal, ArrowRight } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

// component
import { ResponsiveImage } from "../image";
import Stack from "../stack";
import ListItem from "./list-item";
import Button from "../button";

// types
import { ContentType } from "@/types/content";

interface Props {
  data: ContentType;
}

const Content = ({ data }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Stack
      spacing={14}
      className={clsx(
        "w-full rounded-4xl border border-grey-600 !gap-2 !lg:gap-[14px]",
        "py-[26px] lg:pt-[30px] pb-8 pr-3 lg:pr-[35px] pl-3 lg:pl-4"
      )}
    >
      <div className="pl-[13px] lg:pl-[15px] flex flex-col items-start lg:flex-row lg:items-center gap-5">
        <ResponsiveImage
          src={`png/${data.icon}`}
          alt={data.executive}
          size="w-12 h-12 lg:w-14 lg:h-14 shrink-0"
        />

        <Stack spacing={2}>
          <h3 className="text-lg lg:text-xl font-[700] leading-[24px] text-black-600">
            {data.title}
          </h3>

          <div className="flex items-center gap-2 lg:gap-3 text-navy-300 text-xs lg:text-base text-center">
            <p className="font-[500] leading-[21.8px]">{data.executive}</p>

            <span className="w-1 h-1 rounded-full bg-navy-400" />

            <p className="font-[500] leading-[21.8px]">{data.company}</p>

            <span className="w-1 h-1 rounded-full bg-navy-400" />

            <div className="flex items-center gap-2 lg:gap-2.5">
              <MicVocal strokeWidth={3} size={16} />
              <p className="text-xs lg:text-sm font-[700] leading-[40px] tracking-[5%] uppercase">
                {data.category}
              </p>
            </div>

            <span className="w-1 h-1 rounded-full bg-navy-400" />

            <p className="font-[500] leading-[21.8px] uppercase">{data.date}</p>
          </div>
        </Stack>
      </div>

      <h4 className="pl-[14px] lg:text-lg leading-[26px] lg:leading-[28px] tracking-[0.2px] font-[500] text-navy-300">
        {data.description}
      </h4>

      <Stack spacing={4} className={clsx("pl-2 lg:px-4 mt-[3px]")}>
        {data.content.map((item, index, items) => (
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
          className="flex items-center justify-center gap-2.5"
        >
          <p className="text-lg font-[700] leading-[100%]">Full Summary</p>
          <ArrowRight size={24} />
        </Button>
      </div>
    </Stack>
  );
};

export default Content;
