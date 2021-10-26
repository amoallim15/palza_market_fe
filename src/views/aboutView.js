import React from "react"
import HomeAppBar from "../components/homeAppBar"
import Footer from "../components/footer"
import Lang from "../services/lang"
import TabPanel from "../components/tabPanel"
import AboutCompany from "../fragments/aboutCompany"
import SinUpInfo from "../fragments/singUpInfo"
import AdvertisingInquiry from "../fragments/advertisingInquiry"

export default function AboutView({ 
  isAuth,
  userRole,
  userType,
  onTabChange,
  currentTab,
  //
  noticeData,
  onNoticePageChange,
  onNoticeSearchChange,
  onNoticeSearchClick,
  //
  reviewData,
  reviewTypeColors,
  onReviewPageChange
 }) {
  
  return (
    <>
      <HomeAppBar
        sticky={true}
        isAuth={isAuth}
        userRole={userRole}
        userType={userType}
      />
      {/*   UPDATE HERE   */}
      <div className="container mx-auto px-4 pt-10 pb-4 flex-grow">
        {/**/}
        <h1 className="text-center text-4xl font-bold mb-8">
          {Lang.community}
        </h1>
        {/**/}
        <div>
          <div className={"grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-0"}>
            <button
              onClick={(e) => onTabChange(e, 0)}
              className={
                "leading-loose " + (currentTab === 0 ? " border-b-2 border-black font-bold" : " text-gray-800 border-b-2 border-gray-300")
              }
            >
              {Lang.about}
            </button>
            <button
              onClick={(e) => onTabChange(e, 1)}
              className={
                "leading-loose " + (currentTab === 1 ? " border-b-2 border-black font-bold" : " text-gray-800 border-b-2 border-gray-300")
              }
            >
              가입안내
            </button>
            <button
              onClick={(e) => onTabChange(e, 2)}
              className={
                "leading-loose " + (currentTab === 2 ? " border-b-2 border-black font-bold" : " text-gray-800 border-b-2 border-gray-300")
              }
            >
              광고문의
            </button>
          </div>
        </div>
        {/**/}
        <TabPanel value={currentTab} index={0}>
          <AboutCompany
            noticeData={noticeData}
            onNoticePageChange={onNoticePageChange}
            onNoticeSearchChange={onNoticeSearchChange}
            onNoticeSearchClick={onNoticeSearchClick}
          />
        </TabPanel>
        {/**/}
        <TabPanel value={currentTab} index={1}></TabPanel>
        {/**/}
        <TabPanel value={currentTab} index={2}>
          <SinUpInfo
            reviewData={reviewData}
            reviewTypeColors={reviewTypeColors}
            onReviewPageChange={onReviewPageChange}
          />
        </TabPanel>
        {/**/}
        <TabPanel value={currentTab} index={3}>
          <AdvertisingInquiry />
        </TabPanel>
      </div>
      <Footer />
    </>
  )
  
}
//
