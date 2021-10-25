import React from "react"
import HomeAppBar from "../components/homeAppBar"
import Lang from "../services/lang"
import TabPanel from "../components/tabPanel"
import Footer from "../components/footer"
import FranchiseView from "../fragments/franchiseView"
import MagazineView from "../fragments/magazineView"

export default function HubView({
  isAuth,
  userRole,
  userType,
  onTabChange,
  currentTab,
  //
  franchiseData,
  onFranchisePageChange,
  //
  magazineData,
  onMagazinePageChange,
  onMagazineViewClick
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
          {Lang.realstateHub}
        </h1>
        {/**/}
        <div>
          <div className={"grid grid-cols-2 gap-6 lg:gap-0"}>
            <button
              onClick={(e) => onTabChange(e, 0)}
              className={
                "leading-loose " + (currentTab === 0 ? " border-b-2 border-black font-bold " : "text-gray-800 border-b-2 border-gray-300 ")
              }
            >
              {Lang.franchises}
            </button>
            <button
              onClick={(e) => onTabChange(e, 1)}
              className={
                "leading-loose " + (currentTab === 1 ? " border-b-2 border-black font-bold " : "text-gray-800 border-b-2 border-gray-300 ")
              }
            >
              {Lang.magazines}
            </button>
          </div>
        </div>
        {/**/}
        <TabPanel value={currentTab} index={0}>
          <FranchiseView
            franchiseData={franchiseData}
            onFranchisePageChange={onFranchisePageChange}
          />
        </TabPanel>
        {/**/}
        <TabPanel value={currentTab} index={1}>
          <MagazineView
            magazineData={magazineData}
            onMagazinePageChange={onMagazinePageChange}
            onMagazineViewClick={onMagazineViewClick}
          />
        </TabPanel>
        {/**/}
      </div>
      {/**/}
      <Footer />
    </>
  )
}
