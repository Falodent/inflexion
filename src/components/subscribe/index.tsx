import { useForm } from "react-hook-form";
import { MicVocal } from "lucide-react";

// components
import Input from "../input";
import Stack from "../stack";
import Button from "../button";
import { ResponsiveImage } from "../image";
import Circle from "../circle";
import Wrapper from "@/layout/wrapper";

const Subscribe = () => {
  const { register } = useForm<{ email: string }>();

  return (
    <Wrapper>
      <Stack
        spacing={24}
        className="w-full pt-[34px] pl-[33px] pr-[55px] pb-10 border border-grey-600 rounded-4xl bg-black-900"
      >
        <div className="flex flex-col items-start lg:flex-row gap-5">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/[16%]">
            <ResponsiveImage
              src={`png/logo.png`}
              alt="Inflexion"
              size="w-[25px] h-[24.52px] shrink-0"
            />
          </div>

          <Stack spacing={1}>
            <h3 className="text-xl font-[950] leading-[33px] text-white">
              JOIN THE “INFLEXION” POINT TODAY.
            </h3>

            <div className="flex items-center gap-2 lg:gap-3 text-navy-300 text-xs lg:text-base text-center">
              <p className="font-[500] leading-[21.8px]">
                Inflexion Transcribe
              </p>

              <Circle />

              <div className="flex items-center gap-2 lg:gap-2.5">
                <MicVocal strokeWidth={3} size={16} />
                <p className="text-xs lg:text-sm font-[700] leading-[40px] tracking-[5%] uppercase">
                  Newsletter
                </p>
              </div>

              <Circle />

              <p className="font-[500] leading-[40px] uppercase text-sm">
                WEEKLY
              </p>
            </div>
          </Stack>
        </div>

        <p className="text-lg font-[500] leading-[28px] tracking-[0.2px] text-white">
          Never miss a (spoken) word from the world’s leading AI execs.
        </p>

        <Input register={register("email")} />

        <div className="w-full shrink-0 md:max-w-[140px]">
          <Button
            className="shrink-0 !text-lg !font-[700] !leading-[19px]"
            size="sm"
          >
            Subscribe
          </Button>
        </div>
      </Stack>
    </Wrapper>
  );
};

export default Subscribe;
