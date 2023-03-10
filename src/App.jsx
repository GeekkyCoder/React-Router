import React, { useEffect } from "react";
import Header from "./components/Header";
import Prouduct from "./components/Prouduct";
import SideBar from "./components/SideBar";
import { Route, Routes, useParams } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./App.css";
import HomePage from "./components/HomePage";
import SubHome from "./components/SubHome";
import ProductPage from "./components/ProductPage";
import Aos from "aos";
import Cart from "./components/Cart";
import SubHeader from "./components/SubHeader";
import SignUp from "./components/SignUp";
import Auth from "./components/Authentication/Auth";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />}></Route>
          <Route path="header" element={<Header />}></Route>
          <Route path="product" element={<Prouduct />}></Route>
          <Route path="sidebar" element={<SideBar />}></Route>
          <Route path="/home/sub1" element={<SubHome />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
