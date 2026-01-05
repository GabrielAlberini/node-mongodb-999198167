import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AboutUs } from "../pages/AboutUs";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
