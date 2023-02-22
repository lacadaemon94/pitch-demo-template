import * as React from "react"

const Cart = ({ title, titleId, ...props }) => (
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
    <path d="M18 20a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z" fill="#currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.3 18.8a1.7 1.7 0 1 1 3.4 0 1.7 1.7 0 0 1-3.4 0Zm1.7-.7a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Z"
      fill="#currentColor"
    />
    <path d="M10 20a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z" fill="#currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.3 18.8a1.7 1.7 0 1 1 3.4 0 1.7 1.7 0 0 1-3.4 0Zm1.7-.7a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4ZM3.5 4a.5.5 0 0 1 .5-.5c1.571 0 2.412.893 2.747 1.6H20a.5.5 0 0 1 .492.59l-1.6 8.8a.5.5 0 0 1-.492.41H8a.5.5 0 0 1-.492-.41L5.911 5.706C5.813 5.344 5.311 4.5 4 4.5a.5.5 0 0 1-.5-.5ZM7 6.1l1.417 7.8h9.566L19.4 6.1H6.999Z"
      fill="#currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.654 14.436c.484-.367 1.151-.536 1.93-.536h11.814a.5.5 0 1 1 0 1H6.583c-.65 0-1.075.143-1.326.333-.233.176-.359.423-.359.767 0 .344.126.59.36.767.25.19.676.333 1.325.333h11.415a.5.5 0 1 1 0 1H6.583c-.778 0-1.445-.17-1.93-.536-.502-.38-.755-.933-.755-1.564 0-.632.253-1.184.756-1.564Z"
      fill="#currentColor"
    />
  </svg>
)

export default Cart
