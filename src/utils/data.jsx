import {
  ArrowDownIcon,
  ArrowUpIcon,
  AwardIcon,
  BookIcon,
  BreifcaseIcon,
  UserIcon,
} from "@/assets/icons";

export const infoCard = [
  {
    id: 0,
    icon: <UserIcon stroke={"#329fff"} />,
    title: "Students",
    number: "2585",
    text: "Updated Today",
    trading: "25%",
    tradingBg: "#18d26b",
    color: "#e5f2ff",
    arrowIcon: <ArrowUpIcon />,
  },
  {
    id: 1,
    icon: <AwardIcon />,
    title: "Teachers",
    number: "263",
    text: "Updated 1 day ago",
    trading: "23%",
    tradingBg: "#FFA800",
    color: "#e7faf0",
    arrowIcon: <ArrowDownIcon />,
  },
  {
    id: 2,
    icon: <BreifcaseIcon />,
    title: "Staffs",
    number: "43",
    text: "Updated 3 Day ago",
    trading: "15%",
    tradingBg: "#18d26b",
    color: "#fff6e5",
    arrowIcon: <ArrowUpIcon />,
  },
  {
    id: 3,
    icon: <BookIcon />,
    title: "Course",
    number: "93",
    text: "Updated 5 Day ago",
    trading: "10%",
    tradingBg: "#FFA800",
    color: "#f2f6fa",
    arrowIcon: <ArrowDownIcon />,
  },
];
