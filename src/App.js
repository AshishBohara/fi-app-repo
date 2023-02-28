import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";

import "./App.css";
import Login from "./components/pages/Login/Login";
import PageLayout from "./components/organism/PageLayout/PageLayout";
import InterestRateList from "./components/pages/InterestRate/InterestRateList/InterestRateList";
import InterestRateEdit from "./components/pages/InterestRate/InterestRateEdit/InterestRateEdit";
import PenaltyList from "./components/pages/Penalty/PenaltyList/PenaltyList";
import PenaltyEdit from "./components/pages/Penalty/PenaltyEdit/PenaltyEdit";
import LoanChargesAdd from "./components/pages/LoanCharges/LoanChargesAdd/LoanChargesAdd";
import LoanChargesList from "./components/pages/LoanCharges/LoanChargesList/LoanChargesList";
import LoanChargesEdit from "./components/pages/LoanCharges/LoanChargesEdit/LoanChargesEdit";
import CustomersEdit from "./components/pages/Customers/CustomersEdit/CustomersEdit";
import CustomersAdd from "./components/pages/Customers/CustomersAdd/CustomersAdd";
import CustomersList from "./components/pages/Customers/CustomersList/CustomersList";
import CustomerLoanList from "./components/pages/CustomerLoan/CustomerLoanList/CustomerLoanList";
import CustomerLoanAdd from "./components/pages/CustomerLoan/CustomerLoanAdd/CustomerLoanAdd";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route element={<InterestRateList />} path="/interest_rate/list" />
            <Route
              element={<InterestRateEdit />}
              path="/interest_rate/:interest_rate_id/edit"
            />
            <Route element={<PenaltyList />} path="/penalty/list" />
            <Route element={<PenaltyEdit />} path="/penalty/:penalty_id/edit" />
            <Route element={<LoanChargesAdd />} path="/loan-charges/add" />
            <Route element={<LoanChargesList />} path="/loan-charges/list" />
            <Route element={<CustomersEdit />} path="/customers/:id/edit" />
            <Route element={<CustomersAdd />} path="/customers/add" />
            <Route element={<CustomersList />} path="/customers/list" />
            <Route element={<LoanChargesEdit />} path="/customers/:id/edit" />
            <Route
              element={<CustomerLoanList />}
              path="/customers/:customer_id/loan-list"
            />
            <Route
              element={<CustomerLoanAdd />}
              path="/customers/:customer_id/new-loan"
            />
          </Route>
          <Route element={<Login />} path="/" />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
