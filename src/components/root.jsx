// import React from "react";
import { Route, Routes } from "react-router-dom";
// import { useState } from "react";
import { routes } from "@/constants/routes";
// import LoginPage from "@/pages/login";
import Header from "./header/header";
import Menu from "./menu";

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
            <Routes>
              {routes.map((el) => (
                <Route key={el.path} path={el.path} element={el.components} />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Root;
