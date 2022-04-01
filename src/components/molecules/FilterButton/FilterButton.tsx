import React from "react";
import Button from "../../atoms/Button/Button";

import arrowDownIcon from "../../../assets/icon-arrow-down.svg";
import s from "./FilterButton.module.scss";

type Props = {
  onClick: () => void;
};

const FilterButton = ({ onClick }: Props) => {
  return (
    <Button onClick={() => onClick()} className={s.filterButton}>
      <div>Filter</div>
      <img src={arrowDownIcon} alt="Arrow Down"></img>
    </Button>
  );
};

export default FilterButton;
