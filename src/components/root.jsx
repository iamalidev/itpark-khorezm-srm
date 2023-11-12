import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "@/constants/routes";
import Header from "./header/header";
import Menu from "./menu";
import Footer from "./footer";
import BreadCrumbsBox from "./breadCrumbsBox";

const Root = () => {
  return (
    <div className="wrapper">
      <div>
        <Menu />
      </div>
      <div className="wrapper__content">
        <Header />
        <div className="wrapper__inside">
          <div className="container">
            <BreadCrumbsBox />
            <Routes>
              {routes.map((el) => (
                <Route key={el.path} path={el.path} element={el.components} />
              ))}
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Root;
