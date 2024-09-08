"use client";

import SearchInput from "./Input";
import IconCard from "./IconCard";
import { useState, useCallback } from "react";

type IconListProps = {
  svgList: Array<{ svg: string; name: string }>;
  count: number;
};

const IconsList: React.FC<IconListProps> = ({ svgList, count }) => {
  const [iconList, setIconList] = useState(svgList);

  const changeIcons = useCallback(
    (search: string) => {
      setIconList(() => {
        if (search !== "") {
          return svgList.filter((svg) => {
            search = search.toLowerCase();
            return svg.name.includes(search) || search.includes(svg.name);
          });
        }
        return svgList;
      });
    },
    [svgList]
  );

  return (
    <div className="w-full pt-16">
      <SearchInput
        placeholder={`Search all ${count} icons`}
        onChange={changeIcons}
      />

      <div className="flex py-10 gap-4 flex-wrap items-center justify-center">
        {iconList.map((svg) => {
          return <IconCard key={svg.name} svg={svg} />;
        })}
      </div>
    </div>
  );
};

export default IconsList;
