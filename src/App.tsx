import s from "./App.module.scss";
import Sidebar from "./components/organisms/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import InvoiceDetailsPage from "./pages/Invoice/InvoiceDetailsPage";
import ScrollToTop from "./components/atoms/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className={s.app}>
      <Sidebar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoice/:invoiceId" element={<InvoiceDetailsPage />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
