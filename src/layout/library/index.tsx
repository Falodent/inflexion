import { useState } from "react";
import clsx from "clsx";

// components
import Content from "@/components/content";
import Filters from "@/components/filters";
import Stack from "@/components/stack";

// content
import { Transcript } from "@/content/transcript/transcript";

const Library = () => {
  const [active, setActive] = useState<string[]>([]);

  return (
    <div
      className={clsx(
        "w-full rounded-[28px] mt-[12px]",
        "bg-white lg:bg-grey-300",
        "pt-[82px] lg:pt-[70px] pb-[140px] lg:pb-[188px]"
      )}
    >
      <Stack
        spacing={58}
        className="mx-auto w-[95%] max-w-[400px] sm:max-w-[520px] lg:max-w-[700px] items-center"
      >
        <h1
          className={clsx(
            "font-[950] text-center uppercase lg:tracking-[0.1px] text-black-400",
            "text-[32px] sm:text-[40px] lg:text-[56px] leading-[44px] lg:leading-[64px]"
          )}
        >
          Every word spoken. By top AI execs
        </h1>

        <Stack spacing={40} className="w-full">
          <Filters active={active} setActive={setActive} />

          <Stack spacing={32} className="w-full">
            {Transcript.map((item) => (
              <Content key={item.id} data={item} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Library;
