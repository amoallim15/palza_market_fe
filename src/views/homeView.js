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
            <i className="xi-long-arrow-left ml-3" />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide}>
            <i className="xi-long-arrow-right mr-3"/>
          </button>
        )}>
        <img className="hero h-screen lg:h-auto relative" src={mainBanenrOne} alt="mainbanner1" />
      </Carousel>
      <div class="w-10/12 mx-auto lg:absolute lg:left-40 lg:text-3xl lg:w-9/12 lg:-bottom-12">
          <div className="shadow-2xl bg-white rounded-md">
            <ul class="grid grid-cols-2 gap-1">
              <li class="border-r-1">
                <div class="flex py-5 lg:p-5 text-center justify-around lg:justify-between">
                  <i class="xi-search point-color-font"></i>
                  <input class="text-xs w-9/12 lg:text-xl outline-none" type="text" placeholder="원하시는 키워드를 입력하세요." />
                </div>
              </li>
              <li class="flex justify-between">
                <div class="flex py-5 lg:py-5 lg:pl-6 text-center w-8/12 justify-around lg:justify-between relative">
                  <i class="xi-filter point-color-font"></i>
                  <select class="text-xs lg:text-xl appearance-none w-4/6 outline-none" name="" id="">
                    <option value="" disabled="" selected="">업종 카테고리</option>
                    <option value="">휴게음식점</option>
                    <option value="">일반음식점</option>
                    <option value="">주류점</option>
                    <option value="">오락스포츠</option>
                    <option value="">판매업</option>
                    <option value="">서비스업</option>
                    <option value="">기타업종</option>
                  </select>
                  <i class="xi-caret-down-min absolute top-50 right-0 lg:right-5 point-color-font"></i>
                </div>
                <button class="point-blue text-white text-xs px-3 m-2 lg:m-6 lg:px-5 rounded-md lg:text-xl " type="submit">검색</button>
              </li>
            </ul>
          </div>
        </div>
        </div>
    </>
  )
}
// 