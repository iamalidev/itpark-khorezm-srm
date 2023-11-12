import { useState } from "react";
import Search from "antd/es/input/Search";
import NoticeModal from "./noticeModal";
import FlagsModal from "./flagsModal";
import ProfileModal from "./profileModal";
import {
  MenIcon,
  SettingsIcon,
  UsIcon,
} from "@/assets/icons";
import Modal from "./modal";

const onSearch = (value, _e, info) => console.log(info?.source, value);

const Header = () => {
  return (
    <div className="header">
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />

      <ul className="header-infobar">
        <li className="header-infobar__item">
          <SettingsIcon />
        </li>

        <li className="header-infobar__item">
          <NoticeModal />
        </li>

        <li className="header-infobar__item">
          <FlagsModal />
        </li>

        <li className="header-infobar__item">
          <ProfileModal />
        </li>
      </ul>
    </div>
  );
};

export default Header;
