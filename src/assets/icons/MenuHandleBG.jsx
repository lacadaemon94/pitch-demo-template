import * as React from "react"

const MenuHandleBG = ({ title, titleId, ...props }) => (
  <svg
    width="52"
    height="32"
    viewBox="0 0 10 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M0 0h13.5l-2.143 3.571a17.84 17.84 0 0 1-1.964 2.674l-.299.336a3.471 3.471 0 0 1-5.188 0 15.997 15.997 0 0 1-2.352-3.473L0 0Z"
      fill="#CD094E"
    />
  </svg>
)

export default MenuHandleBG
