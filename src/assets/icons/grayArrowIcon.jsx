import * as React from "react"
const GrayArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#B8BECC"
      fillRule="evenodd"
      d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10 10-4.477 10-10ZM6.47 9.53a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72V14a.75.75 0 1 1-1.5 0V7.81L7.53 9.53a.75.75 0 0 1-1.06 0Z"
      clipRule="evenodd"
    />
  </svg>
)
export default GrayArrowIcon;