import React from "react"
import HomeAppBar from "../components/homeAppBar"

export default function SearchView({ isAuth, userRole, userType }) {
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
