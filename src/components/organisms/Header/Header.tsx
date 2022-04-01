import React, { Dispatch, SetStateAction, useState } from "react";
import NewInvoiceButton from "../../molecules/NewInvoiceButton/NewInvoiceButton";

import s from "./Header.module.scss";
import cn from "classnames";

import arrowDownIcon from "../../../assets/icon-arrow-down.svg";
import { Draft } from "../../../stories/InvoiceStatusLabel.stories";
import FilterButton from "../../molecules/FilterButton/FilterButton";
import FilterOption from "../../molecules/FilterOption/FilterOption";
import FilterDroplist from "../../molecules/FilterDroplist/FilterDroplist";

type IFilterSelection = "draft" | "pending" | "paid";
const filterOptions: IFilterSelection[] = ["draft", "pending", "paid"];

type Props = {
  selectedFilter: IFilterSelection | null;
  onFilterChange: (any) => void;
  onClickNewForm: () => void;
  // przekazać jaka opcja jest filtrowana i na tej postawie robić 'checked'
  // dla danego inputa ( checked={optionSelected === 'paid'} czy coś w ten gust)
  //
};

const Header = ({ selectedFilter, onFilterChange, onClickNewForm }: Props) => {
  const [filterOpen, setFilterOpen] = useState(false);

  const openFilterHandler = () => {
    setFilterOpen((state) => !state);
  };

  return (
    <div className={s.header}>
      <h1 className={s.title}>Invoices</h1>
      <div className={s.nrOfInvoices}>7 invoices</div>

      <div className={s.filterWrapper}>
        <FilterButton onClick={openFilterHandler} />
        <FilterDroplist
          filterOpen={filterOpen}
          onFilterChange={onFilterChange}
          selectedFilter={selectedFilter}
        />
      </div>
      <div className={s.newInvoiceButton}>
        <NewInvoiceButton onClick={onClickNewForm} />
      </div>
    </div>
  );
};

export default Header;
