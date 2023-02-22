import * as React from "react"

const UserAvatar = ({ title, titleId, ...props }) => (
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0ZM12 4.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Z"
      fill="#currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.212 17.385a.5.5 0 0 1-.787-.617l.393.308-.393-.308.002-.002.002-.003.007-.009a1.903 1.903 0 0 1 .1-.114c.067-.073.164-.172.294-.29.26-.235.65-.542 1.182-.846 1.068-.61 2.699-1.204 4.99-1.204 2.29 0 3.921.594 4.99 1.204.532.305.921.611 1.18.846a4.55 4.55 0 0 1 .373.378c.01.01.017.02.022.026l.007.009.003.003v.001s.001.001-.375.296l.376-.295a.5.5 0 0 1-.787.617l.394-.308-.394.308-.009-.01a3.579 3.579 0 0 0-.28-.283 5.77 5.77 0 0 0-1.007-.72c-.924-.527-2.384-1.072-4.493-1.072-2.11 0-3.57.544-4.494 1.072a5.773 5.773 0 0 0-1.007.72 3.607 3.607 0 0 0-.28.282l-.01.011Zm0 0-.001.001ZM9.1 9.6a2.9 2.9 0 1 1 5.8 0 2.9 2.9 0 0 1-5.8 0ZM12 7.7a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8Z"
      fill="#currentColor"
    />
  </svg>
)

export default UserAvatar
