import React from "react"
import HomeAppBar from "../components/homeAppBar"
import Lang from "../services/lang"
import TabPanel from "../components/tabPanel"
import NoticesView from "../fragments/noticesView"
import ReviewsView from "../fragments/reviewsView"
import Footer from "../components/footer"
//
export default function CommunityView({
  isAuth,
  userRole,
  userType,
  onTabChange,
  currentTab,
  //
  noticeData,
  noticeCategoryMap,
  //
  reviewData,
  reviewTypeColors
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
        <h1 className="text-center text-3xl font-bold mb-8">
          {Lang.community}
        </h1>
        {/**/}
        <div>
          <div className={"tabs tabs-boxed grid grid-cols-4"}>
            <button
              onClick={(e) => onTabChange(e, 0)}
              className={"tab h-full" + (currentTab === 0 ? " tab-active" : "")}
            >
              {Lang.notices}
            </button>
            <button
              onClick={(e) => onTabChange(e, 1)}
              className={"tab h-full" + (currentTab === 1 ? " tab-active" : "")}
            >
              {Lang.reports}
            </button>
            <button
              onClick={(e) => onTabChange(e, 2)}
              className={"tab h-full" + (currentTab === 2 ? " tab-active" : "")}
            >
              {Lang.reviews}
            </button>
            <button
              onClick={(e) => onTabChange(e, 3)}
              className={"tab h-full" + (currentTab === 3 ? " tab-active" : "")}
            >
              {Lang.purchaseSaleRequest}
            </button>
          </div>
        </div>
        {/**/}
        <TabPanel value={currentTab} index={0}>
          <NoticesView
            noticeData={noticeData}
            noticeCategoryMap={noticeCategoryMap}
          />
        </TabPanel>
        {/**/}
        <TabPanel value={currentTab} index={1}></TabPanel>
        {/**/}
        <TabPanel value={currentTab} index={2}>
          <ReviewsView
            reviewData={reviewData}
            reviewTypeColors={reviewTypeColors}
          />
        </TabPanel>
        {/**/}
        <TabPanel value={currentTab} index={3}></TabPanel>
      </div>
      {/**/}
      <Footer />
    </>
  )
}
