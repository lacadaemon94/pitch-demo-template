import * as React from "react"

const Instagram = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.904 0h18.192C22.694 0 24 1.315 24 2.92V21.08C24 22.688 22.692 24 21.096 24H2.904C1.306 24 0 22.685 0 21.08V2.92C0 1.312 1.308 0 2.904 0Zm-.312 9.881H4.99a7.181 7.181 0 0 0-.387 2.328c0 4.02 3.312 7.278 7.397 7.278 4.085 0 7.397-3.258 7.397-7.278 0-.813-.137-1.597-.387-2.328h2.398v10.106a1.3 1.3 0 0 1-1.294 1.3H3.787c-.657 0-1.195-.54-1.195-1.201V9.88Zm14.866-7.503h2.786c.629 0 1.145.519 1.145 1.15v2.603c0 .632-.516 1.15-1.145 1.15h-2.786a1.152 1.152 0 0 1-1.145-1.15V3.53c0-.632.516-1.15 1.145-1.15Zm-5.45 4.703c2.651 0 4.802 2.118 4.802 4.727 0 2.61-2.15 4.727-4.803 4.727-2.652 0-4.802-2.117-4.802-4.727 0-2.61 2.15-4.727 4.802-4.727Z"
        fill="#currentColor"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default Instagram
