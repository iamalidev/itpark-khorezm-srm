import * as React from "react"
const CircleEditIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <circle cx={10} cy={10} r={10} fill="#0080FF" />
    <path
      fill="#fff"
      d="m13.135 8.707-1.86-1.841.612-.614A.84.84 0 0 1 12.506 6c.245 0 .45.084.618.252l.613.614a.87.87 0 0 1 .262.608.791.791 0 0 1-.24.608l-.624.625Zm-.635.646L7.86 14H6v-1.863l4.64-4.647 1.86 1.863Z"
    />
  </svg>
)
export default CircleEditIcon;