import * as React from "react"

const AppLogo = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#a)">
      <rect width={29.863} height={29.863} rx={6} fill="url(#b)" />
      <path
        d="M16.538-.58c2.41-3.13 3.463-4.213 4.474-4.603.425-.164.502-.172.723-.077.088.038.378.112.644.164 1.866.367 2.909 1.615 2.834 3.39-.086 2.02-1.105 4.542-2.282 5.645-.186.176-.508.487-.715.693-1.212 1.206-3.049 2.423-5.25 3.48-.513.245-1.006.525-1.097.621-.451.478-1.248 2.092-1.328 2.69a5.843 5.843 0 0 1-.173.73c-.29.958-.072 1.248.79 1.05.705-.164 3.635-2.162 6.794-4.635 2.124-1.662 3.239-2.043 3.915-1.337.465.487.5 1.545.091 2.773-.272.816-2.099 2.227-5.567 4.3l-.992.592-.507 1.02c-3.075 6.182-4.401 9.122-4.745 10.522-.834 3.39-.175 4.455 1.853 2.996 1.04-.749 1.708-1.373 2.938-2.748 1.476-1.65 2.649-3.177 5.432-7.076 1.447-2.027 4.63-6.408 4.954-6.82.112-.143.404-.522.65-.844l.446-.585.38.001c1.264.005 1.538 1.176.781 3.343-1.054 3.02-3.107 6.965-4.744 9.12a965.18 965.18 0 0 1-6.198 8.015c-1.986 2.527-5.87 4.345-7.931 3.712-4.59-1.412-4.72-5.94-.467-16.056.07-.168.119-.313.107-.323a7.786 7.786 0 0 0-.448-.19c-2.305-.933-3.148-3.918-1.99-7.047.536-1.45.502-1.757-.155-1.41-1.15.608-6.476 1.795-8.507 1.896-2.23.111-3.607-1.1-3.166-2.788.142-.544.391-.753 1.115-.937.267-.068.664-.196.883-.285.22-.089 1.424-.452 2.677-.807 2.457-.697 2.73-.777 4.585-1.344 4.916-1.5 5.31-1.794 9.196-6.84Z"
        fill="#FEE5F1"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={29.863}
        y1={0.863}
        x2={0}
        y2={29.863}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF66B4" />
        <stop offset={0.52} stopColor="#D41872" />
        <stop offset={1} stopColor="#F06" />
      </linearGradient>
      <clipPath id="a">
        <rect width={29.863} height={29.863} rx={6} fill="#fff" />
      </clipPath>
    </defs>
  </svg>
)

export default AppLogo