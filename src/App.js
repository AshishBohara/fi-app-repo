import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";

import "./App.css";
import Login from "./components/pages/Login/Login";
import PageLayout from "./components/organism/PageLayout/PageLayout";
import InterestRateList from "./components/pages/InterestRate/InterestRateList/InterestRateList";
import InterestRateEdit from "./components/pages/InterestRate/InterestRateEdit/InterestRateEdit";

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
          </Route>
          <Route element={<Login />} path="/" />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
