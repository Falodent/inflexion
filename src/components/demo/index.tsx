import { useForm } from "react-hook-form";

// components
import Input from "../input";
import Stack from "../stack";
import Button from "../button";

const Demo = () => {
  const { register } = useForm<{ email: string }>();

  return (
    <Stack
      spacing={24}
      className="w-full max-w-[700px] md:pt-[34px] py-[50px] px-[30px] md:pl-[33px] md:pr-[55px] md:pb-10 border border-grey-600 rounded-4xl bg-black-900"
    >
      <h3 className="text-2xl md:text-[28px] font-[700] leading-[36px] text-white align-middle">
        Do you want to include this in your data room?
      </h3>

      <p className="text-lg font-[500] md:font-[700] leading-[28px] tracking-[0.2px] text-white md:uppercase mt-14 md:mt-0">
        Join the “Inflexion” point today.
      </p>

      <Input register={register("email")} />

      <div className="w-full shrink-0 md:max-w-[250px]">
        <Button
          className="shrink-0 !text-lg !font-[700] !leading-[19px]"
          size="sm"
        >
          Book a call with our team
        </Button>
      </div>
    </Stack>
  );
};

export default Demo;
