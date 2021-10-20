import React from "react"
import HomeAppBar from "../components/homeAppBar"
import Carousel from 'nuka-carousel';
import topBannerSlideOne from "../assets/imgs/topban1.png";
import topBannerSlideTwo from "../assets/imgs/topban2.jpg";
import mainBanenrOne from "../assets/imgs/main1.jpg";

export default function HomeView({ isAuth, userRole, userType }) {
  //
  return (
    <>
    <div className="lg:block hidden">
      <Carousel autoplay={true} withoutControls= {true} wrapAround = {true} initialSlideHeight = {80}>
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
      <div className="w-full my-0 lg:py-0 max-w-screen-xl lg:relative">
      <Carousel  speed={1500} autoplay={true} wrapAround = {true} renderBottomCenterControls={()=> null}
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide}>
            <i className="xi-long-arrow-left ml-10" />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide}>
            <i className="xi-long-arrow-right mr-10"/>
          </button>
        )}>
        <img className="h-screen lg:h-auto" src={mainBanenrOne} alt="mainbanner1" />
      </Carousel>
      </div>
    </>
  )
}
// 