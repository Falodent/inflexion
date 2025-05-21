/* eslint-disable @next/next/no-img-element */

"use client";

import clsx from "clsx";
import Skeleton from "react-loading-skeleton";

// components
import { ResponsiveImage, StaticImage } from "@/components/image";
import Stack from "@/components/stack";

// types
import { FullContentType } from "@/types/content";
import Circle from "@/components/circle";
import { MicVocal } from "lucide-react";
import { convertDate } from "@/helpers/convert-date";
import YouTubeEmbed from "@/components/youtube-player";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ExecutiveImage } from "@/helpers/executive-image";

interface Props {
  data: FullContentType;
  isLoading: boolean;
}

const Summary = ({ data, isLoading }: Props) => {
  // convert date string to DD MM, YYYY
  const date = convertDate(data?.created_date ?? new Date());

  const [play, setPlay] = useState(false);

  return (
    <>
      <section
        className={clsx(
          "mx-auto w-[95%] lg:w-full max-w-[480px] sm:max-w-[580px] lg:max-w-[800px]",
          "grid grid-cols-1 lg:grid-cols-[56px_1fr] gap-[22px]"
        )}
      >
        <div className="mt-2">
          {isLoading ? (
            <Skeleton width={56} height={56} circle />
          ) : (
            <StaticImage
              src={`png/${
                ExecutiveImage[data?.executive_name] ?? "avatar.png"
              }`}
              alt="Profile"
              width={56}
              height={56}
            />
          )}
        </div>

        <Stack spacing={14} className="w-full">
          <div className="w-full">
            {isLoading ? (
              <Skeleton width="100%" height={48} />
            ) : (
              <h1 className="text-2xl md:text-[35px] font-[700] leading-[38px] md:leading-[48px] align-middle text-black-600">
                {data?.title}
              </h1>
            )}
          </div>

          <div className="flex items-center gap-2 lg:gap-3 text-navy-300 text-xs lg:text-base text-center">
            {isLoading ? (
              <div className="w-[15%]">
                <Skeleton width="100%" height={21} />
              </div>
            ) : (
              <p className="font-[500] leading-[21.8px] align-middle">
                {data?.executive_name}
              </p>
            )}

            <Circle />

            {isLoading ? (
              <div className="w-[15%]">
                <Skeleton width="100%" height={21} />
              </div>
            ) : (
              <p className="font-[500] leading-[21.8px] align-middle">
                {data?.company_name || "None"}
              </p>
            )}

            <Circle />

            {isLoading ? (
              <div className="w-[15%]">
                <Skeleton width="100%" height={21} />
              </div>
            ) : (
              <div className="flex items-center gap-2 lg:gap-2.5">
                <MicVocal strokeWidth={3} size={16} />
                <p className="text-xs lg:text-sm font-[700] leading-[40px] tracking-[5%] uppercase">
                  {data?.source}
                </p>
              </div>
            )}

            <Circle />

            {isLoading ? (
              <div className="w-[15%]">
                <Skeleton width="100%" height={21} />
              </div>
            ) : (
              <p className="text-sm font-[500] leading-[21.8px] uppercase">
                {date}
              </p>
            )}
          </div>

          <div className="w-full mt-3">
            {isLoading ? (
              <Skeleton width="100%" height={100} />
            ) : (
              <h4 className="break-words whitespace-normal text-lg font-[500] leading-[30px] tracking-[0.2px] text-navy-600 align-middle">
                {data?.description}
              </h4>
            )}
          </div>

          <div className="w-full mt-4">
            {isLoading ? (
              <Skeleton width="100%" height={320} borderRadius={32} />
            ) : (
              <div className="w-full relative rounded-4xl">
                <div className="w-full h-full absolute top-0 left-0 rounded-4xl bg-black/20" />

                <img
                  src={data?.thumbnail_url}
                  alt={data?.video_id}
                  className="w-full h-[290px] sm:h-[380px] rounded-4xl"
                  loading="eager"
                />

                <button
                  onClick={() => setPlay(true)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <ResponsiveImage
                    src="svg/play-btn.svg"
                    alt="Youtube Play"
                    size="w-[68px] h-[47px] lg:w-[106px] lg:h-[74px]"
                  />
                </button>
              </div>
            )}
          </div>

          <Stack spacing={12} className="w-full mt-5">
            {isLoading ? (
              <Skeleton width="100%" height={22} count={3} className="mb-3" />
            ) : (
              <>
                <p className="font-[500] text-[11px] leading-[21.8px] text-navy-300 italic align-middle uppercase">
                  ORIGINALLY POSTED BY @{data?.author} ON YOUTUBE. ALL RIGHTS OF
                  THE ORIGINAL AUDIO ARE OWNED BY THE ORIGINAL PUBLISHER.
                </p>

                <p className="font-[500] text-[11px] leading-[21.8px] text-navy-300 italic align-middle">
                  THE BELOW IS PURELY FOR EDUCATION PURPOSES AND SHOULD NOT BE
                  TAKEN OR USED AS FINANCIAL ADVICE. BY READING THE BELOW YOU
                  ACKNOWLEDGE AND INDEMNIFY INFLEXION TRANSCRIBE OF ANY
                  LIABILITY OF ACTING ON THE BELOW AND AGREE TO DO YOU OWN
                  INDEPENDENT RESEARCH ON THE TOPIC.
                </p>

                <p className="font-[500] text-[11px] leading-[21.8px] text-navy-300 italic align-middle">
                  THE ACTUAL CONTENTS HAS ALSO BEEN CREATED WITH THE AID OF AI
                  (AND HUMANS) BUT THE ACCURACY CAN NOT BE GUARANTEED. PLEASE
                  CHECK AND VERIFY ALL STATEMENTS FOR ACCURACY.
                </p>
              </>
            )}
          </Stack>
        </Stack>
      </section>

      <AnimatePresence>
        {play && (
          <YouTubeEmbed
            onClose={() => setPlay(false)}
            videoUrl={data?.source_url ?? ""}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Summary;
