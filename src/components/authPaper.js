import React from "react"

export default function AuthPaper({ children, className }) {
  const classes =
    "bg-white shadow w-full rounded-lg divide-y divide-gray-200 " + className
  return <div className={classes}>{children}</div>
}
