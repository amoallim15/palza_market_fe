import React from "react"
import HomeAppBar from "../components/homeAppBar"

export default function HomeView({ isAuth, userRole, userType }) {
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
    </>
  )
}
