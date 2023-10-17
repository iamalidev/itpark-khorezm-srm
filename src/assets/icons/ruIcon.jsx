const RuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={20}
      height={20}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <rect width={20} height={20} fill="#D9D9D9" rx={3} />
    </mask>
    <g mask="url(#a)">
      <mask
        id="b"
        width={26}
        height={20}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0h26v19.5H0V0Z"
          clipRule="evenodd"
        />
      </mask>
      <g mask="url(#b)">
        <path
          fill="#3D58DB"
          fillRule="evenodd"
          d="M0 0v19.5h26V0H0Z"
          clipRule="evenodd"
        />
        <mask
          id="c"
          width={26}
          height={20}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M0 0v19.5h26V0H0Z"
            clipRule="evenodd"
          />
        </mask>
        <g fillRule="evenodd" clipRule="evenodd" mask="url(#c)">
          <path fill="#F7FCFF" d="M0 0v6.5h26V0H0Z" />
          <path fill="#C51918" d="M0 13v6.5h26V13H0Z" />
        </g>
      </g>
    </g>
  </svg>
)
export default RuIcon;