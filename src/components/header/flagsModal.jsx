import { RuIcon, UsIcon, UzIcon } from "@/assets/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: (
      <li className="modal-menu__item">
        <UzIcon style={{ borderRadius: "3px" }} />
        <p className="item-text">Uzbek</p>
      </li>
    ),
    key: "0",
  },
  {
    label: (
      <li className="modal-menu__item">
        <RuIcon
          style={{ borderRadius: "3px", border: "1px solid #d0d0d0aa" }}
        />
        <p className="item-text">Russian</p>
      </li>
    ),
    key: "1",
  },
  {
    label: (
      <li className="modal-menu__item">
        <UsIcon style={{ borderRadius: "3px" }} />
        <p className="item-text">English</p>
      </li>
    ),
    key: "2",
  },
];

const FlagsModal = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={["click"]}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <UsIcon />
      </Space>
    </a>
  </Dropdown>
);
export default FlagsModal;
