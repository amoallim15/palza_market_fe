import React from "react"
import HomeAppBar from "../components/homeAppBar"
import Lang from "../services/lang"
import TabPanel from "../components/tabPanel"
import NoticesView from "../fragments/noticesView"
import ReviewsView from "../fragments/reviewsView"
import Footer from "../components/footer"
import PurchaseRequestView from "../fragments/purchaseRequestView"
//
export default function CommunityView({
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
  //
  return (
    <>
      <HomeAppBar
        sticky={true}
        isAuth={isAuth}
        userRole={userRole}
        userType={userType}
      />
      <div className="container mx-auto px-4 pt-10 pb-4 flex-grow">
        {/**/}
        <h1 className="text-center text-4xl font-bold mb-8">
          {Lang.community}
        </h1>
        {/**/}
        <div>
          <div className={"grid grid-cols-4"}>
            <button
              onClick={(e) => onTabChange(e, 0)}
              className={
                "leading-loose " + (currentTab === 0 ? " border-b-2 border-black font-bold" : " text-gray-800 border-b-2 border-gray-300")
              }
            >
              {Lang.notices}
            </button>
            <button
              onClick={(e) => onTabChange(e, 1)}
              className={
                "leading-loose " + (currentTab === 1 ? " border-b-2 border-black font-bold" : " text-gray-800 border-b-2 border-gray-300")
              }
            >
              {Lang.reports}
            </button>
            <button
              onClick={(e) => onTabChange(e, 2)}
              className={
                "leading-loose " + (currentTab === 2 ? " border-b-2 border-black font-bold" : " text-gray-800 border-b-2 border-gray-300")
              }
            >
              {Lang.reviews}
            </button>
            <button
              onClick={(e) => onTabChange(e, 3)}
              className={
                "leading-loose " + (currentTab === 3 ? " border-b-2 border-black font-bold" : " text-gray-800 border-b-2 border-gray-300")
              }
            >
              {Lang.purchaseSaleRequest}
            </button>
          </div>
        </div>
        {/**/}
        <TabPanel value={currentTab} index={0}>
          <NoticesView
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
          <ReviewsView
            reviewData={reviewData}
            reviewTypeColors={reviewTypeColors}
            onReviewPageChange={onReviewPageChange}
          />
        </TabPanel>
        {/**/}
        <TabPanel value={currentTab} index={3}>
          <PurchaseRequestView />
        </TabPanel>
      </div>
      {/**/}
      <Footer />
    </>
  )
}
