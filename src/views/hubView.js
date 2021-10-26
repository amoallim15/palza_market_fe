import React from "react"
import HomeAppBar from "../components/homeAppBar"
import HubTab from "../components/HubTab"

export default function HubView({ isAuth, userRole, userType }) {
  //
  return (
    <>
      <HomeAppBar
        sticky={true}
        isAuth={isAuth}
        userRole={userRole}
        userType={userType}
      />
      {/*   UPDATE HERE   */}
      <HubTab />
    </>
  )
}
