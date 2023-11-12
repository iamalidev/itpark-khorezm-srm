import { useState } from "react";
import Search from "antd/es/input/Search";
import {
  MenIcon,
  NotificationsIcon,
  SettingsIcon,
  UsIcon,
} from "@/assets/icons";
import Modal from "./modal";

const onSearch = (value, _e, info) => console.log(info?.source, value);

const Header = () => {
  const [one, setOne] = useState("none");
  const [two, setTwo] = useState("none");
  const [three, setThree] = useState("none");
  const [finder, setFinder] = useState(0);

  const allClose = () => {
    setOne("none");
    setTwo("none");
    setThree("none");
    setFinder(0);
  };

  const oneOpen = () => {
    setOne("flex");
    setTwo("none");
    setThree("none");
    setFinder(1);
  };

  const twoOpen = () => {
    setOne("none");
    setTwo("flex");
    setThree("none");
    setFinder(2);
  };

  const threeOpen = () => {
    setOne("none");
    setTwo("none");
    setThree("flex");
    setFinder(3);
  };

  return (
    <div className="header">
      <Search
        className="header__search"
        placeholder="Search"
        allowClear
        onSearch={onSearch}
      />

      <ul className="header-infobar">
        <li className="header-infobar__item">
          <SettingsIcon />
        </li>

        <li className="header-infobar__item" onClick={oneOpen}>
          <NotificationsIcon />
          <Modal condition={one} allClose={allClose} finder={finder} />
        </li>

        <li className="header-infobar__item" onClick={twoOpen}>
          <UsIcon />
          <Modal condition={two} allClose={allClose} finder={finder} />
        </li>

        <li className="header-infobar__item" onClick={threeOpen}>
          <MenIcon />
          <Modal condition={three} allClose={allClose} finder={finder} />
        </li>
      </ul>
    </div>
  );
};

export default Header;
