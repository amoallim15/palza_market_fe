import React from "react"
//
export default function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div hidden={value !== index} {...other}>
      {value === index && <div className="py-3">{children}</div>}
    </div>
  )
}
