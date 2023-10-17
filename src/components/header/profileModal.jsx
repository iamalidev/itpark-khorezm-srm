import { EmailIcon, LogOutIcon, MenIcon, UserIcon } from "@/assets/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: <li className="modal-menu__item title">John Doe</li>,
    key: "0",
  },
  {
    label: <li className="modal-menu__item"> <UserIcon /><p className="modal-menu__item-text">My Profile</p></li>,
    key: "1",
  },
  {
    label: <li className="modal-menu__item"> <EmailIcon /><p className="modal-menu__item-text">Email</p></li>,
    key: "2",
  },
  {
    label: <li className="modal-menu__item"><LogOutIcon /><p className="modal-menu__item-text">Log out</p></li>,
    key: "3",
  }
];

const ProfileModal = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={["click"]}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <MenIcon />
      </Space>
    </a>
  </Dropdown>
);
export default ProfileModal;
