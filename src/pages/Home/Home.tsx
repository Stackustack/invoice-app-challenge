import React, { useState } from "react";
import Header from "../../components/organisms/Header/Header";
import InvoicesList from "../../components/organisms/InvoicesList/InvoicesList";

import mockedInvoices from "../../assets/data.json";

import s from "./Home.module.scss";
import NewInvoiceForm from "../../components/organisms/NewInvoiceForm/NewInvoiceForm";
import Form from "../../components/organisms/Form/Form";

type Props = {};

type IFilterOption = "draft" | "pending" | "paid" | null;

const Home = (props: Props) => {
  const [filterOption, setFilterOption] = useState<IFilterOption>(null);
  const [isFormDisplayed, setIsFormDisplayed] = useState<boolean>(false);

  const [isNewInvoiceViewDisplayed, setIsNewInvoiceViewDisplayed] =
    useState<boolean>(false);

  const onFilterChange = (event) => {
    const selection: IFilterOption = event.target.value;

    if (selection === filterOption) {
      setFilterOption(null);
    } else {
      setFilterOption(selection);
    }
  };

  const filteredInvoices = () => {
    if (filterOption === null) return mockedInvoices;

    return mockedInvoices.filter((invoice) => {
      return invoice.status === filterOption;
    });
  };

  const handleNewFormClick = () => {
    setIsFormDisplayed(true);
  };

  const handleDismissForm = () => {
    setIsFormDisplayed(false);
  };

  return (
    <div className={s.home}>
      <Form
        isDisplayed={isFormDisplayed}
        onClickDismissForm={handleDismissForm}
      />
      <Header
        onClickNewForm={handleNewFormClick}
        onFilterChange={onFilterChange}
        selectedFilter={filterOption}
      />
      <InvoicesList invoices={filteredInvoices()} />
    </div>
  );
};

export default Home;
