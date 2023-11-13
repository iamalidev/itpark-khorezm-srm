import {
  BlueDollarIcon,
  GreenPaperIcon,
  NotificationIcon,
  RedEyeIcon,
  YellowBoxIcon,
} from "@/assets/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: <li className="modal-menu__item title">Notifications</li>,
    key: "0",
  },
  {
    label: (
      <li className="modal-menu__item" style={{ padding: "1rem" }}>
        <BlueDollarIcon />
        <div className="modal-menu">
          <p className="modal-menu__item-text">$135 received</p>
          <p className="modal-menu__item-date">Today, 10:45 AM</p>
        </div>
      </li>
    ),
    key: "1",
  },
  {
    label: (
      <li className="modal-menu__item" style={{ padding: "1rem" }}>
        <GreenPaperIcon />
        <div className="modal-menu">
          <p className="modal-menu__item-text">Project X prototype approved</p>
          <p className="modal-menu__item-date">Yesterday, 01:40 PM</p>
        </div>
      </li>
    ),
    key: "2",
  },
  {
    label: (
      <li className="modal-menu__item" style={{ padding: "1rem" }}>
        <RedEyeIcon />

        <div className="modal-menu">
          <p className="modal-menu__item-text">
            John requested to view wireframe
          </p>
          <p className="modal-menu__item-date">3 Sep 2019, 05:22 PM</p>
        </div>
      </li>
    ),
    key: "3",
  },
  {
    label: (
      <li className="modal-menu__item" style={{ padding: "1rem" }}>
        <YellowBoxIcon />

        <div className="modal-menu">
          <p className="modal-menu__item-text">Sports shoes are out of stock</p>
          <p className="modal-menu__item-date">15 Sep 2019, 02:55 PM</p>
        </div>
      </li>
    ),
    key: "4",
  },
];

const NoticeModal = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={["click"]}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <NotificationIcon />
      </Space>
    </a>
  </Dropdown>
);
export default NoticeModal;
