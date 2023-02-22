import * as React from "react"

const CCard = ({ title, titleId, ...props }) => (
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
    <path d="M8 14.4a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z" fill="#currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.7 13.6a1.3 1.3 0 1 1 2.6 0 1.3 1.3 0 0 1-2.6 0Zm1.3-.3a.3.3 0 1 0 0 .6.3.3 0 0 0 0-.6Z"
      fill="#currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 6.9v2.2h15V6.9h-15Zm15 3.2h-15v7h15v-7Zm-16-3.22a.98.98 0 0 1 .98-.98h15.04a.98.98 0 0 1 .98.98v10.24a.98.98 0 0 1-.98.98H4.48a.98.98 0 0 1-.98-.98V6.88Z"
      fill="#currentColor"
    />
  </svg>
)

export default CCard
