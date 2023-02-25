import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";

import "./App.css";
import Login from "./components/pages/Login/Login";
import PageLayout from "./components/organism/PageLayout/PageLayout";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route element={<Login />} path="/dashboard" />
          </Route>
          <Route element={<Login />} path="/" />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
