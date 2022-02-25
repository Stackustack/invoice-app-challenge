import s from "./App.module.scss";
import InvoiceSimpleCard from "./components/molecules/InvoiceSimpleCard/InvoiceSimpleCard";

function App() {
  return (
    <div className={s.app}>
      <InvoiceSimpleCard
        id={"XM9141"}
        clientName={"Michal Jung"}
        paymentDue={"2021-08-19"}
        invoiceTotal={2137}
        status={"paid"}
      />
    </div>
  );
}

export default App;
