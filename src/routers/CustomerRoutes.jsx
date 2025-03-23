import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import Canteen from "../components/Canteen/Canteen";
import Navbar from "../components/Navbar/Navbar";
import Cart from "../components/Cart/Cart";
import Profile from "../components/Profile/Profile";
import { Auth } from "../components/Auth/Auth";

export default function CustomerRoutes() {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account/:register" element={<HomePage/>}/>
        <Route path="/canteen/:name/:id" element={<Canteen />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/my-profile/*" element={<Profile/>}/>
      </Routes>
      <Auth/>
    </div>
  );
}
