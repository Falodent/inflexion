import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  register: UseFormRegisterReturn;
}

const Input = ({ register }: InputProps) => {
  return (
    <input
      className="w-full h-14 px-[25px] border border-ash-100 bg-white rounded-xl outline-none leading-[24px] text-black-900 placeholder:text-ash-200"
      placeholder="olivia@newui.com"
      {...register}
      style={{ boxShadow: "0px 1px 2px 0px #0A0D120D" }}
    />
  );
};

export default Input;
