import React from "react";
import Header from "../molecules/header/Header";
import Footer from "@/app/atomic/molecules/footer/Footer";

const PortfolioLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PortfolioLayout;
