import React from "react";
import { Link, NavLink } from "react-router-dom";
import { menuData } from "@/constants/menuSide";
import clsx from "clsx";
import { Logo } from "@/assets/icons";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__top">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="menu__list">
        {menuData.map((item) => (
          <NavLink key={item.id} to={item.path}>
            <div
              className={clsx(
                "menu__link",
                location.pathname == item.path && "active",
                item.visible && "hidden"
              )}
            >
              {item.icon}
              {item.label}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Menu;
