// components
import Stack from "@/components/stack";
import Table from "@/components/table";

interface Props {
  isLoading: boolean;
  table: any;
}

const KPI = ({ isLoading, table }: Props) => {
  return (
    <Stack spacing={24} className="w-full">
      <h4 className="text-xl font-[700] leading-[32px] text-black">
        Table 1 – Fresh KPIs & Guidance
      </h4>

      <Table isLoading={isLoading} rows={table?.rows ?? []} />
    </Stack>
  );
};

export default KPI;
