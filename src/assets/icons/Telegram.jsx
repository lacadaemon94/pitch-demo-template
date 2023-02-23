import * as React from "react"

const Telegram = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 25"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#a)">
      <path
        d="M12 .387C5.371.387 0 5.75 0 12.372c0 6.62 5.371 11.985 12 11.985s12-5.364 12-11.985C24 5.75 18.629.387 12 .387Zm5.893 8.21-1.969 9.27c-.145.657-.537.816-1.084.507l-3-2.208-1.447 1.391c-.16.16-.295.295-.604.295l.213-3.05 5.56-5.016c.241-.212-.054-.333-.373-.12l-6.871 4.32-2.962-.923c-.643-.203-.658-.643.136-.952l11.57-4.456c.536-.193 1.006.13.831.942Z"
        fill="#currentColor"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24.744H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default Telegram
