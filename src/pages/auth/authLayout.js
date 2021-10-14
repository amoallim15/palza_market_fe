import React from "react"
import HomeAppBar from "../../components/homeAppBar"
import Footer from "../../components/footer"

export default function AuthLayout({ children }) {
  return (
    <>
      <HomeAppBar sticky={false} />
      <div className="h-full bg-gray-100 flex flex-col justify-center sm:py-12">
        {children}
      </div>
      <Footer />
    </>
  )
}
