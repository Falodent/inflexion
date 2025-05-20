import { UseFormRegisterReturn } from "react-hook-form";
import { Search as SearchIcon, X as Close } from "lucide-react";

interface SearchProps {
  register: UseFormRegisterReturn;
  isOpen: boolean;
  handleClick: () => void;
}

const Search = ({ register, isOpen, handleClick }: SearchProps) => {
  return (
    <div>
      <input
        type="search"
        className="hidden lg:flex w-120 xl:w-200 h-14 px-[25px] border border-navy-100 rounded-2xl outline-none leading-[40px] placeholder:text-grey-100"
        placeholder="Search companies, executives..."
        {...register}
      />

      <div
        role="button"
        onClick={handleClick}
        className="border border-navy-100 w-12 h-12 rounded-xl bg-navy-500 cursor-pointer text-white flex lg:hidden items-center justify-center"
      >
        {!isOpen ? <SearchIcon size={20.57} /> : <Close size={20.57} />}
      </div>
    </div>
  );
};

export default Search;
