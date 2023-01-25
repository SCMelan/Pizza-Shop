import { Route, Routes } from "react-router-dom";
import Header from "./components/headerComp";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";

import "./scss/app.scss";
import { useState,createContext } from "react";
import FullPizza from "./pages/FullPizza";

export const searchContext:any = createContext('');

function App() {
  const [searchValue, setSearchValue] = useState();
  return (
    <div className="wrapper">
      <searchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<FullPizza />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </searchContext.Provider>
    </div>
  );
}

export default App;
