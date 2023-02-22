import * as React from "react"

const MenuHandle = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 7 4"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m1 1 1.54 1.848c.5.6 1.42.6 1.92 0L6 1"
      stroke="#FEE5F1"
      strokeWidth={0.75}
      strokeLinecap="round"
    />
  </svg>
)

export default MenuHandle
