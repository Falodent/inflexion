import { UseFormRegisterReturn } from "react-hook-form";
import { Search as SearchIcon } from "lucide-react";

interface SearchProps {
  register: UseFormRegisterReturn;
}

const Search = ({ register }: SearchProps) => {
  return (
    <div>
      <input
        className="hidden lg:flex w-120 xl:w-200 h-14 px-[25px] border border-navy-100 rounded-2xl outline-none leading-[40px] placeholder:text-grey-100"
        placeholder="Search companies, executives..."
        {...register}
      />

      <div className="border border-navy-100 w-12 h-12 rounded-xl bg-navy-500 cursor-pointer text-white flex lg:hidden items-center justify-center">
        <SearchIcon size={20.57} />
      </div>
    </div>
  );
};

export default Search;
