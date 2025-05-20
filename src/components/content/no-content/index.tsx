import { Inbox } from "lucide-react";

const NoContent = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-60 w-full">
      <Inbox className="text-black-900 h-16 w-16 mb-3" />

      <h2 className="text-black-900 text-xl font-[700]">
        No content to display.
      </h2>
    </div>
  );
};

export default NoContent;
