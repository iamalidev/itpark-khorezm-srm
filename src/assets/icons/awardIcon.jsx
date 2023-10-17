import * as React from "react";
const AwardIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={20}
    height={20}
    fill="none"
    stroke="#18d289"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="feather feather-award"
    {...props}
  >
    <circle cx={12} cy={8} r={7} />
    <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
  </svg>
);
export default AwardIcon;