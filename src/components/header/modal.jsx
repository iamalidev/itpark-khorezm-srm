import {
  BlueDollarIcon,
  EmailIcon,
  GreenPaperIcon,
  LogOutIcon,
  RedEyeIcon,
  RuIcon,
  UsIcon,
  UserIcon,
  UzIcon,
  YellowBoxIcon,
} from "@/assets/icons";
import { useEffect, useState } from "react";

function Modal({ condition, allClose, finder }) {
  const [modalData, setModalData] = useState("");

  useEffect(() => {
    if (finder == 1) {
      setModalData(
        <ul className="modal-menu">
          <li className="modal-menu__item title">Notifications</li>
          <li className="modal-menu__item" style={{ padding: "1rem" }}>
            <BlueDollarIcon />

            <div className="modal-menu">
              <p className="modal-menu__item-text">$135 received</p>
              <p className="modal-menu__item-date">Today, 10:45 AM</p>
            </div>
          </li>
          <li className="modal-menu__item" style={{ padding: "1rem" }}>
            <GreenPaperIcon />

            <div className="modal-menu">
              <p className="modal-menu__item-text">
                Project X prototype approved
              </p>
              <p className="modal-menu__item-date">Yesterday, 01:40 PM</p>
            </div>
          </li>
          <li className="modal-menu__item" style={{ padding: "1rem" }}>
            <RedEyeIcon />

            <div className="modal-menu">
              <p className="modal-menu__item-text">
                John requested to view wireframe
              </p>
              <p className="modal-menu__item-date">3 Sep 2019, 05:22 PM</p>
            </div>
          </li>
          <li className="modal-menu__item" style={{ padding: "1rem" }}>
            <YellowBoxIcon />

            <div className="modal-menu">
              <p className="modal-menu__item-text">
                Sports shoes are out of stock
              </p>
              <p className="modal-menu__item-date">15 Sep 2019, 02:55 PM</p>
            </div>
          </li>
        </ul>
      );
    } else if (finder == 2) {
      setModalData(
        <ul className="modal-menu">
          <li className="modal-menu__item">
            <UzIcon style={{ borderRadius: "3px" }} />
            <p className="item-text">Uzbek</p>
          </li>
          <li className="modal-menu__item">
            <RuIcon
              style={{ borderRadius: "3px", border: "1px solid #d0d0d0aa" }}
            />
            <p className="item-text">Russian</p>
          </li>
          <li className="modal-menu__item">
            <UsIcon style={{ borderRadius: "3px" }} />
            <p className="item-text">English</p>
          </li>
        </ul>
      );
    } else {
      setModalData(
        <ul className="modal-menu">
          <li className="modal-menu__item title">John Doe</li>
          <li className="modal-menu__item">
            <UserIcon />
            <p className="modal-menu__item-text">My Profile</p>
          </li>
          <li className="modal-menu__item">
            <EmailIcon />
            <p className="modal-menu__item-text">Email</p>
          </li>
          <li
            className="modal-menu__item"
            onClick={() => {
              localStorage.clear();
              location.reload();
            }}
          >
            <LogOutIcon />
            <p className="modal-menu__item-text">Log out</p>
          </li>
        </ul>
      );
    }
  }, [finder]);

  return (
    <div
      className="modal"
      onMouseLeave={allClose}
      style={{ display: `${condition}` }}
    >
      {modalData}
    </div>
  );
}

export default Modal;
