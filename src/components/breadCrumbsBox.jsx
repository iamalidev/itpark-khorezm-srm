import { Breadcrumb } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const BreadCrumbsBox = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setTitle("Dashboard");
        break;
      case "/courses":
        setTitle("Courses");
        break;
      case "/calendar":
        setTitle("Calendar");
        break;
      case "/my-account":
        setTitle("Profile");
        break;
    }
  }, [location.pathname]);

  return (
    <div className="box">
      <h4 className="box__title">{title}</h4>
      <Breadcrumb
        className="box__breadcrumb"
        separator=">"
        items={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Courses",
            href: "",
          },
          // {
          //   title: "Calendar",
          // },
        ]}
      />
    </div>
  );
};

export default BreadCrumbsBox;
