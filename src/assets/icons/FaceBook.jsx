import * as React from "react"

const FaceBook = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 28"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M24 4.313v18.975a2.58 2.58 0 0 1-2.571 2.587h-4.57v-9.552h3.246l.466-3.644H16.86V10.35c0-1.057.29-1.774 1.795-1.774h1.917V5.321a25.626 25.626 0 0 0-2.796-.146c-2.764 0-4.66 1.698-4.66 4.82v2.69H9.856v3.643h3.263v9.547H2.57A2.58 2.58 0 0 1 0 23.288V4.313a2.58 2.58 0 0 1 2.571-2.588H21.43A2.58 2.58 0 0 1 24 4.313Z"
      fill="#currentColor"
    />
  </svg>
)

export default FaceBook
