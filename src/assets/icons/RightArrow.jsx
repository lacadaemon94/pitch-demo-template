import * as React from "react"

const RightArrow = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    stroke="currentColor"
    strokeWidth={0.35}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.966 3.966a.5.5 0 0 1 .708 0l7.68 7.68a.5.5 0 0 1 0 .708l-7.68 7.68a.5.5 0 0 1-.708-.708l6.827-6.826H4a.5.5 0 0 1 0-1h14.793l-6.827-6.826a.5.5 0 0 1 0-.708Z"
      fill="#currentColor"
    />
  </svg>
)

export default RightArrow
