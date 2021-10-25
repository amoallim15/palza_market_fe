import React from "react"
import CommunityView from "../views/communityView"
import AppContext from "../services/context"
import { useCookies } from "react-cookie"
import { checkAuth } from "../services/api"
import { getNotices, getReviews } from "../services/api"
//
const reviewTypeColors = {
  BUYING: "badge-primary",
  SELLING: "badge-secondary"
}
//
export default function Community() {
  const [loaded, setLoaded] = React.useState(false)
  const { appState, appDispatch } = React.useContext(AppContext)
  const [cookies] = useCookies()
  const [currentTab, setCurrentTab] = React.useState(0)
  //
  // Notice..
  const [noticeData, setNoticeData] = React.useState({
    info: { page: 0, count: 0 },
    data: []
  })
  const [noticeSearchField, setNoticeSearchField] = React.useState("")
  const onNoticePageChange = async (page) => {
    let result = await getNotices(page)
    if (result) await setNoticeData(result)
  }
  const onNoticeSearchChange = async (e) => {
    await setNoticeSearchField(e.target.value)
    console.log(noticeSearchField, e.target.value)
  }
  const onNoticeSearchClick = async (e) => {
    console.log("test")
    // TODO:
  }
  // Review..
  const [reviewData, setReviewData] = React.useState({
    info: { page: 0, count: 0 },
    data: []
  })
  const onReviewPageChange = async (page) => {
    let result = await getReviews(page)
    if (result) await setReviewData(result)
  }
  //
  React.useEffect(() => {
    ;(async () => {
      //
      if (!appState.currentUser && cookies["token"]) {
        const result = await checkAuth(cookies["token"])
        if (result) {
          appDispatch({ type: "UpdateCurrentUser", payload: result })
          appDispatch({ type: "UpdateIsAuth", payload: true })
        } else {
          appDispatch({ type: "UpdateIsAuth", payload: false })
        }
      }
      // Notice..
      let result_1 = await getNotices(0)
      if (result_1) await setNoticeData(result_1)
      // Reviews..
      let result_2 = await getReviews(0)
      if (result_2) await setReviewData(result_2)
      //
      await setLoaded(true)
    })()
  }, [appDispatch, appState.currentUser, cookies, appState.noticeCategories])
  //
  if (!loaded) return <div />
  return (
    <CommunityView
      isAuth={appState.isAuth}
      userRole={appState.currentUser?.user_role}
      userType={appState.currentUser?.user_type}
      currentTab={currentTab}
      onTabChange={(e, value) => setCurrentTab(value)}
      noticeData={noticeData}
      onNoticePageChange={onNoticePageChange}
      onNoticeSearchChange={onNoticeSearchChange}
      onNoticeSearchClick={onNoticeSearchClick}
      reviewData={reviewData}
      reviewTypeColors={reviewTypeColors}
      onReviewPageChange={onReviewPageChange}
    />
  )
}
