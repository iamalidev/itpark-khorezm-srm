import * as React from "react"
const AddIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <circle cx={10} cy={10} r={10} fill="#0080FF" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.3}
      d="M10 6v8M6 10h8"
    />
  </svg>
)
export default AddIcon;