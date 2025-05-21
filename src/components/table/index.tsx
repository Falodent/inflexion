import Skeleton from "react-loading-skeleton";

interface TableProps {
  rows: string[][];
  isLoading?: boolean;
}

const Table = ({ rows, isLoading = false }: TableProps) => {
  const skeletonRows = 4;

  const headers = ["Metric", "New Figure", "Prior/Street", "Δ"];

  return (
    <div className="overflow-x-auto border border-ash-600 rounded-[14px] scrollbar-none">
      <table className="min-w-full text-left">
        <thead className="border-b border-ash-600">
          <tr>
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="px-6 py-[12.5px] font-[700] text-navy-300 whitespace-nowrap text-sm leading-[16.92px]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-ash-600">
          {isLoading
            ? Array.from({ length: skeletonRows }).map((_, rowIdx) => (
                <tr key={rowIdx} className="">
                  {Array.from({ length: 4 }).map((_, colIdx) => (
                    <td key={colIdx} className="px-6 py-[18.5px]">
                      <Skeleton height={16} />
                    </td>
                  ))}
                </tr>
              ))
            : rows.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className="hover:bg-ash-700 transition-all ease-in-out duration-300"
                >
                  {row.map((cell, cellIdx) => (
                    <td
                      key={cellIdx}
                      className="px-6 py-[18.5px] whitespace-nowrap leading-none font-[500] text-black-600"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
