import * as React from "react"

const Twitter = ({ title, titleId, ...props }) => (
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
      d="M21.429 1.696H2.57C1.151 1.696 0 2.836 0 4.241v18.66c0 1.406 1.152 2.545 2.571 2.545H21.43c1.42 0 2.571-1.14 2.571-2.544V4.242c0-1.406-1.152-2.546-2.571-2.546Zm-2.62 8.419c.01.148.01.302.01.45 0 4.597-3.535 9.893-9.996 9.893-1.993 0-3.84-.573-5.394-1.559.284.032.557.043.846.043a7.092 7.092 0 0 0 4.36-1.485 3.514 3.514 0 0 1-3.283-2.412c.54.08 1.028.08 1.585-.063a3.486 3.486 0 0 1-2.812-3.414v-.043c.466.26 1.013.419 1.586.44a3.482 3.482 0 0 1-1.15-1.252 3.44 3.44 0 0 1-.415-1.642c0-.647.172-1.24.477-1.755a10.012 10.012 0 0 0 7.243 3.637c-.498-2.36 1.286-4.273 3.429-4.273 1.012 0 1.923.418 2.566 1.097a6.929 6.929 0 0 0 2.228-.838 3.475 3.475 0 0 1-1.543 1.914 7.049 7.049 0 0 0 2.025-.54 7.355 7.355 0 0 1-1.762 1.802Z"
      fill="#currentColor"
    />
  </svg>
)

export default Twitter
