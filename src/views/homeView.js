import React from "react"


export default function HomeView({ isAuth, userRole, userType }) {
  return <div />
  //
  // return (
  //   <>
  //     <div className="lg:block hidden">
  //       <Carousel
  //         autoplay={true}
  //         withoutControls={true}
  //         wrapAround={true}
  //         initialSlideHeight={80}
  //       >
  //         <img className="block w-auto" src={topBannerSlideOne} alt="topban1" />
  //         <img className="block w-auto" src={topBannerSlideTwo} alt="topban2" />
  //       </Carousel>
  //     </div>
  //     <HomeAppBar
  //       sticky={true}
  //       isAuth={isAuth}
  //       userRole={userRole}
  //       userType={userType}
  //     />
  //     {/*   UPDATE HERE   */}
  //     <div className="w-full my-0 lg:py-0 max-w-screen-xl lg:relative">
  //       <Carousel
  //         speed={1500}
  //         autoplay={true}
  //         wrapAround={true}
  //         renderBottomCenterControls={() => null}
  //         renderCenterLeftControls={({ previousSlide }) => (
  //           <button onClick={previousSlide}>
  //             <i className="xi-long-arrow-left ml-3" />
  //           </button>
  //         )}
  //         renderCenterRightControls={({ nextSlide }) => (
  //           <button onClick={nextSlide}>
  //             <i className="xi-long-arrow-right mr-3" />
  //           </button>
  //         )}
  //       >
  //         <img
  //           className="hero h-screen lg:h-auto relative"
  //           src={mainBanenrOne}
  //           alt="mainbanner1"
  //         />
  //       </Carousel>
  //       <div className="lg:left-40 lg:w-9/12 lg:-bottom-12">
  //         <SearchBar />
  //       </div>
  //     </div>
  //     {/* section 2 start */}
  //     <div className="mx-auto my-0 max-w-screen-xl lg:mt-40">
  //       <div className="my-20 lg:grid grid-cols-2">
  //         <div className="lg:text-left">
  //           <h2 className="text-4xl mb-5">
  //             <strong>긴급 매각!</strong> 스페셜 광고
  //           </h2>
  //           <hr class="hidden lg:block lg:w-8"></hr>
  //           <div class="my-5 text-lg">
  //             <i class="xi-timer-o mr-2" name="time-five"></i>
  //             <span>서두르지 않으면 놓칠지도 몰라요 !</span>
  //           </div>
  //           <div className=""><PropSingle /></div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
}
//
