import React from "react"

export default function AuthPaper({ children }) {
  return (
    <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
      {children}
    </div>
  )
}
