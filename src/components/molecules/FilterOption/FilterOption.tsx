import React from "react";

import s from "./FilterOption.module.scss";

type Props = {
  onFilterChange: (any) => void;
  filterOption: string;
  checked: boolean;
};

const FilterOption = ({ onFilterChange, filterOption, checked }: Props) => {
  return (
    <label className={s.filterOption}>
      <input
        className={s.input}
        type="radio"
        name="filter"
        value={filterOption}
        checked={checked}
        // should use onChange instead of onClick, but with onClick deselecting
        // filter doesn't work for some reason
        onClick={onFilterChange}
        // adding 'readOnly' to get rid of the above problem as it produces errors
        // in console
        readOnly
      />
      {filterOption}
    </label>
  );
};

export default FilterOption;
