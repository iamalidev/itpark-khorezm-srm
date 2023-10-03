import React from "react";
import Menu from "./menu";
import Header from "./header/header";
// import { Route, Routes } from "react-router-dom";
// import clsx from "clsx";
// import { routes } from "../constants/routes";

const Root = () => {
  return (
    <div className="wrapper">
      <div>
        <Menu />
      </div>
      <div className="wrapper__content">
        <Header />
        {/* <div className="wrapper-content_inside">
          <div className="container">
            <Routes>
              {routes.map((el) => (
                <Route
                  key={el.path}
                  path={el.path}
                  element={el.components}
                  //   className={clsx(`${!el.visible && "hidden"}`)}
                />
              ))}
            </Routes>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Root;
