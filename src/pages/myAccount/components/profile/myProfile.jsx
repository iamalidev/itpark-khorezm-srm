import React from "react";
import ProfileIcon from "@/assets/images/profileIcon.png";
import EditIcon from "@/assets/icons/editIcon";
import { DeleteIcon, SaveIcon } from "@/assets/icons";

const MyProfile = () => {
  return (
    <div className="profile">
      <div className="edit">
        <div className="edit__box">
          <button className="edit__box-icon">
            <EditIcon />
          </button>
          <img src={ProfileIcon} alt="img" />
          <button className="edit__box-delete">
            <DeleteIcon />
          </button>
        </div>
      </div>
      <div className="form">
        <p className="form__title">Edit Profile Informations</p>
        <div className="form__box">
          <form className="form__group">
            <label className="form__group-input">
              Username
              <input type="text" name="name" className="form__group-form" />
            </label>
            <label className="form__group-input">
              Mobile Number
              <input type="tel" name="name" className="form__group-form" />
            </label>
            <label className="form__group-input">
              Password
              <input type="password" name="name" className="form__group-form" />
            </label>
          </form>
          <form className="form__group">
            <label className="form__group-input">
              Email
              <input type="email" name="name" className="form__group-form" />
            </label>
            <label className="form__group-input">
              Date of Brith
              <input type="date" name="name" className="form__group-form" />
            </label>
            <label className="form__group-input">
              Confirmed Password
              <input type="password" name="name" className="form__group-form" />
            </label>
          </form>
        </div>
        <form className="form__radio">
          <label className="form__radio-input">
            <input type="radio" name="gender" value="male" />
            Male
          </label>
          <label className="form__radio-input">
            <input type="radio" name="gender" value="female" />
            Female
          </label>
        </form>
        <button className="form__button"> <SaveIcon/> Update</button>
      </div>
    </div>
  );
};

export default MyProfile;
