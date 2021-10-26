import React from "react"
import HomeAppBar from "../components/homeAppBar"
import Carousel from "nuka-carousel"
import topBannerSlideOne from "../assets/imgs/topban1.png"
import topBannerSlideTwo from "../assets/imgs/topban2.jpg"
import bannerTwo from "../assets/imgs/banner2.jpg"
import mainBanenrOne from "../assets/imgs/main1.jpg"
import magazineImgTest from "../assets/imgs/magazine.jpg"
import SearchBar from "../components/SearchBar"
import PropSingle from "../components/PropSingle"
import PropSingleTwo from "../components/PropSingleTwo"
import PropSingleThree from "../components/PropSingleThree"

export default function HomeView({ isAuth, userRole, userType }) {
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
      <div className="w-full my-0 lg:py-0 max-w-screen-xl lg:relative">
        <Carousel
          speed={1500}
          autoplay={true}
          wrapAround={true}
          renderBottomCenterControls={() => null}
          renderCenterLeftControls={({ previousSlide }) => (
            <button onClick={previousSlide}>
              <i className="xi-long-arrow-left ml-3" />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button onClick={nextSlide}>
              <i className="xi-long-arrow-right mr-3" />
            </button>
          )}
        >
          <div className="h-96 lg:h-auto">
          <img
            className="hero h-full lg:h-auto relative"
            src={mainBanenrOne}
            alt="mainbanner1"
          />
          </div>
        </Carousel>
        <div className="lg:left-40 lg:w-9/12 lg:-bottom-12">
          <SearchBar />
        </div>
      </div>
      {/* section 2 start */}
      <div className="container mx-auto my-0 lg:mt-40">
        <div className="my-20 lg:grid grid-cols-2 overflow-x-scroll lg:overflow-auto">
          <div className="lg:text-left">
            <h2 className="text-4xl py-5 lg:py-0">
              <strong>긴급 매각!</strong> 스페셜 광고
            </h2>
            <hr class="hidden lg:block lg:w-8"></hr>
            <div class="lg:my-5 mb-3 text-lg">
              <i class="xi-timer-o mr-2" name="time-five"></i>
              <span>서두르지 않으면 놓칠지도 몰라요 !</span>
            </div>
          </div>
          <div className="grid grid-flow-col auto-cols-max gap-5 overflow-x-scroll lg:overflow-auto">
            <div className="">
              <PropSingle />
            </div>
            <div className="">
              <PropSingle />
            </div>
          </div>
        </div>
      </div>
      {/* section 3 start */}
      <div className="bg-gray-100 py-20">
        <div className="mx-auto my-0 container lg:pb-10">
          <h2 className="text-4xl text-center py-5">
            <strong>HOT!</strong> 인기 매물
          </h2>
          <a href="#" class="text-sm text-right block lg:mr-0">
            더보기 <i class="xi-angle-right-min"></i>
          </a>
        <div className="m-5 grid grid-flow-col auto-cols-max gap-10 overflow-x-scroll lg:overflow-auto">
          <div className="">
            <PropSingleTwo />
          </div>
          <div className="">
            <PropSingleTwo />
          </div>
          <div className="">
            <PropSingleTwo />
          </div>
          <div className="">
            <PropSingleTwo />
          </div>
        </div>
        </div>
      </div>
      {/* section 4 start */}
      <div className="py-20">
        <div className="mx-auto my-0 container lg:pb-10">
          <h2 className="text-4xl text-center py-5">
            <strong>우리동네</strong> 신상 매물
          </h2>
          <a href="#" class="text-sm text-right block lg:mr-0">
            더보기 <i class="xi-angle-right-min"></i>
          </a>
        <div className="m-5 grid grid-flow-col auto-cols-max gap-10 overflow-x-scroll lg:overflow-auto">
          <div className="">
            <PropSingleTwo />
          </div>
          <div className="">
            <PropSingleTwo />
          </div>
          <div className="">
            <PropSingleTwo />
          </div>
          <div className="">
            <PropSingleTwo />
          </div>
        </div>
        </div>
      </div>
      {/* section 5 */}
      <div className="bg-gray-100">
      <div className="mx-auto container">
        <div className="my-20 lg:grid grid-cols-2 overflow-x-scroll lg:overflow-auto">
          <div className="lg:text-left">
            <h2 className="text-4xl py-5 lg:py-0">
              <strong>우리동네</strong> 거래완료 매물
            </h2>
            <hr class="hidden lg:block lg:w-8"></hr>
            <div class="lg:my-5 mb-3 text-lg">
              <i class="xi-flag-o mr-2" name="time-five"></i>
              <span>최근 우리동네 매물의 매매 최종호가를 확인하세요!</span>
            </div>
          </div>
          <div className="grid grid-flow-col auto-cols-max gap-5 overflow-x-scroll lg:overflow-auto">
            <div className="">
              <PropSingleThree />
            </div>
            <div className="">
              <PropSingleThree />
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* bottomBanner */}
      <div className="py-10">
        <Carousel
          slidesToShow={1}
          autoplay={true}
          withoutControls={true}
          wrapAround={true}
          initialSlideHeight={80}
          slideWidth={1}
        >
          <div className="mx-auto container h-48">
          <img className="block mx-auto h-full" src={bannerTwo} alt="bottomban1" />
          </div>
          <div className="mx-auto container h-48">
          <img className="block mx-auto h-full" src={bannerTwo} alt="bottomban2" />
          </div>
        </Carousel>
      </div>
      {/* section 6 */}
      <div className="py-20">
        <div className="mx-auto my-0 container lg:pb-10">
          <h2 className="text-4xl text-center py-5">
            <strong>팔자</strong> 매거진
          </h2>
          <a href="#" class="text-sm text-right block lg:mr-0 py-5">
            더보기 <i class="xi-angle-right-min"></i>
          </a>
          <div class="lg:grid lg:grid-cols-2 lg:gap-10 lg:pb-24">
        <div class="m-4 list-shadow lg:m-0 lg:shadow-none">
          <a href="#" class="block">
            <img class="inline-block w-full rounded-t-lg" src={magazineImgTest} alt=""  />
            <h3 class="text-2xl mt-2 truncate font-semibold">대형마트-스벅은 '텅텅' vs 제과점-개인카페 '카공족남발'블라 블라블라블라블라블라블라브라</h3>
            <p class="text-lg mt-2 truncate">사회적 거리두기 2.5단계로 격상 첫날 프랜차이즈 카페와 마트 등 손님이 줄어 블라 블라 블라 블라 블라 블라 블라 블라 블라</p>
          </a>
        </div>
        <div class="m-4 lg:m-0 lg:shadow-none">
          <ul class="grid grid-cols-2 gap-4 lg:p-0">
            <li>
              <a href="#" class="block">
                <img class="w-full inline-block rounded-sm" src={magazineImgTest} alt="" />
                <p class="etc hidden md:block truncate mt-2 font-semibold">"1주일간 멈춰주세요"서울 블라블라블라블라블라블라브라</p>
              </a>
            </li>
            <li>
              <a href="#" class="block">
                <img class="w-full inline-block rounded-sm" src={magazineImgTest} alt="" />
                <p class="etc hidden md:block truncate mt-2 font-semibold">"1주일간 멈춰주세요"서울 블라블라블라블라블라블라브라</p>
              </a>
            </li>
            <li class="hidden lg:block">
              <a href="#" class="block">
                <img class="w-full inline-block rounded-sm" src={magazineImgTest} alt="" />
                <p class="etc hidden md:block truncate mt-2 font-semibold">"1주일간 멈춰주세요"서울 블라블라블라블라블라블라브라</p>
              </a>
            </li>
            <li class="hidden lg:block">
              <a href="#" class="block">
                <img class="w-full inline-block rounded-sm" src={magazineImgTest} alt="" />
                <p class="etc hidden md:block truncate mt-2 font-semibold">"1주일간 멈춰주세요"서울 블라블라블라블라블라블라브라</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
        </div>
      </div>

    </>
  )
}
//
