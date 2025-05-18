import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Navbar/Navbar";
import BG from "../components/Navbar/Header";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import Shooter from "../pages/Shooter/Shooter";
import Sailing from "../pages/Sailing/Sailing";
import Permadeath from "../pages/permadeath/Permadeath";
import Pixel from "../pages/pixel/Pixel";

function AppRouter() {
  const location = useLocation();
  const isDetailsPage = location.pathname.startsWith("/details/");
  return (
    <>
      {/* <Details /> */}
      <BG />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mmorpg" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/shooter" element={<Shooter />} />
        <Route path="/sailing" element={<Sailing />} />
        <Route path="/permadeath" element={<Permadeath />} />
        <Route path="/pixel" element={<Pixel />} />
      </Routes>
      {!isDetailsPage && <Footer />}
    </>
  );
}

export default function Router() {
  return (
    <BrowserRouter basename="/Games">
      <AppRouter />
    </BrowserRouter>
  );
}
