import clsx from "clsx";
import { useRouter } from "next/router";

// components
import Back from "@/components/back";
import Details from "@/components/full-summary/details";

// services
import { useSingleContent } from "@/services/content.service";

const FullContent = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: content, isLoading } = useSingleContent(id);

  return (
    <div
      className={clsx(
        "w-full rounded-[28px] mt-[10px] relative",
        "bg-white lg:bg-grey-300",
        "pt-[46px] lg:pt-[91px] pb-[109px]"
      )}
    >
      <div className="mx-auto w-[95%] mb-[22px] lg:absolute lg:top-[103px] lg:left-[47px] z-40">
        <Back />
      </div>

      <Details data={content?.data} isLoading={isLoading} />
    </div>
  );
};

export default FullContent;
