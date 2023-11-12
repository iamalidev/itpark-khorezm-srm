import React from "react";
import LogoutImage from "@/assets/images/logoutImage.png";
import { CheckIcon, CloseIcon } from "@/assets/icons";


const Logout = () => {
  return (
    <div className="logout">
      <p className="logout__text">Logout</p>
      <div className="logout__content">
        <img src={LogoutImage} alt="img" />
        <h2 className="logout__content-title">Logout ?</h2>
        <p className="logout__content-text">
          Are you sure to want to Log out? You will miss your instant checkout
          deal.
        </p>
        <button className="logout__content-btn"> <CheckIcon/> Yes, I'm sure</button>
        <button className="logout__content-cancel"><CloseIcon className="cancel"/> Cancel</button>
      </div>
    </div>
  );
};

export default Logout;
