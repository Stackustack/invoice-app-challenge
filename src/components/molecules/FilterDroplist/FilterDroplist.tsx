import React from "react";

import cn from "classnames";
import s from "./FilterDroplist.module.scss";
import FilterOption from "../FilterOption/FilterOption";

type Props = {
  filterOpen: boolean;
  onFilterChange: (any) => void;
  selectedFilter: string | null;
};

type IFilterSelection = "draft" | "pending" | "paid";
const filterOptions: IFilterSelection[] = ["draft", "pending", "paid"];

const FilterDroplist = ({
  filterOpen,
  onFilterChange,
  selectedFilter,
}: Props) => {
  return (
    <div
      className={cn(s.filterDroplist, {
        [s[`filterDroplist--visible`]]: filterOpen,
      })}
    >
      {filterOptions.map((filter) => {
        return (
          <FilterOption
            key={filter}
            onFilterChange={onFilterChange}
            filterOption={filter}
            checked={filter === selectedFilter}
          />
        );
      })}
    </div>
  );
};

export default FilterDroplist;
