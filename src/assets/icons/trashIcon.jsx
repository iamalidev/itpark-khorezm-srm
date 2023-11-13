import * as React from "react";
const TrashIcon = (gray, ...props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    cursor="pointer"
    {...props}
  >
    <path
      d="M15.8327 3.33333H12.916L12.0827 2.5H7.91602L7.08268 3.33333H4.16602V5H15.8327M4.99935 15.8333C4.99935 16.2754 5.17494 16.6993 5.4875 17.0118C5.80006 17.3244 6.22399 17.5 6.66602 17.5H13.3327C13.7747 17.5 14.1986 17.3244 14.5112 17.0118C14.8238 16.6993 14.9993 16.2754 14.9993 15.8333V5.83333H4.99935V15.8333Z"
      fill={gray ? "#000" : "#ff0000"}
    />
  </svg>
);
export default TrashIcon;
