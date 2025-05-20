import { ArrowLeft } from "lucide-react";

const Back = () => {
  return (
    <div
      role="button"
      className="w-12 h-12 border border-grey-900 rounded-full flex items-center justify-center cursor-pointer"
      onClick={() => history.back()}
    >
      <ArrowLeft className="w-6 h-6 text-black" />
    </div>
  );
};

export default Back;
