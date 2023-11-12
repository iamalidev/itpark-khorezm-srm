import React from "react";
import ProfileIcon from "@/assets/images/profileIcon.png";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <p className="title">Dashboard</p>
        <img src={ProfileIcon} alt="img" className="dashboard__icon" />
        <p className="dashboard__text">Jhon Doe</p>
      </div>
    </>
  );
};

export default Dashboard;