import * as React from "react"
const GridIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#264365"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-grid"
    {...props}
  >
    <rect x={3} y={3} width={7} height={7} />
    <rect x={14} y={3} width={7} height={7} />
    <rect x={14} y={14} width={7} height={7} />
    <rect x={3} y={14} width={7} height={7} />
  </svg>
)
export default GridIcon;