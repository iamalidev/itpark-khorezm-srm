import * as React from "react"
const CircleArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <circle cx={10} cy={10} r={9.5} stroke="#007BFF" />
    <path
      stroke="#007BFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m13 11-3-3-3 3"
    />
  </svg>
)
export default CircleArrowIcon;