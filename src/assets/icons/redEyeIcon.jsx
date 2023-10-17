const RedEyeIcon = (props) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={40} height={40} rx={3} fill="#FFEBEB" />
    <path
      d="M12 20.3176C13.6667 17.6509 20.5 9.81762 28 20.3176"
      stroke="#FF4141"
    />
    <path
      d="M28 20.3176C26.3333 22.9843 19.5 30.8176 12 20.3176"
      stroke="#FF4141"
      strokeLinecap="round"
    />
    <circle cx={20} cy={20.3176} r={2.5} stroke="#FF4141" />
  </svg>
)
export default RedEyeIcon;