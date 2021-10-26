import React from "react"
import HomeAppBar from "../components/homeAppBar"
import Carousel from "nuka-carousel"
import topBannerSlideOne from "../assets/imgs/topban1.png"
import topBannerSlideTwo from "../assets/imgs/topban2.jpg"

export default function AboutView({ isAuth, userRole, userType }) {
  //
  return (
    <>
      <div className="lg:block hidden">
        <Carousel
          autoplay={true}
          withoutControls={true}
          wrapAround={true}
          initialSlideHeight={80}
        >
          <img className="block w-auto" src={topBannerSlideOne} alt="topban1" />
          <img className="block w-auto" src={topBannerSlideTwo} alt="topban2" />
        </Carousel>
      </div>
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
//
