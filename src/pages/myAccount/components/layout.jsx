import React, { useState } from "react";
import { Tabs } from "antd";
import Dashboard from "./profile/dashboard";
import Notifications from "./profile/notifications";
import MyProfile from "./profile/myProfile";
import Logout from "./profile/logout";
import { BellIcon, GridIcon, UserIcon } from "@/assets/icons";
import ProfileLogoutIcon from "@/assets/icons/profileLogoutIcon";

const App = () => {
  const [tabPosition, setTabPosition] = useState("left");
  const [items, setItems] = useState([
    {
      key: "1",
      label: <div className="tab-label"><GridIcon /> Dashboard</div>,
      children: <Dashboard />,
    },
    {
      key: "2",
      label: <div className="tab-label"><BellIcon /> Notifications</div>,
      children: <Notifications />,
    },
    {
      key: "3",
      label: <div className="tab-label"><UserIcon stroke={"#000"} width={15} /> My Profile</div>,
      children: <MyProfile />,
    },
    {
      key: "4",
      label: <div className="tab-label"><ProfileLogoutIcon /> Logout</div>,
      children: <Logout />,
    },
  ]);

  return (
    <>
      <Tabs className="tabs" tabPosition={tabPosition} items={items} />
    </>
  );
};
export default App;
