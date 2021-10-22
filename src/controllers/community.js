import React from "react"
import CommunityView from "../views/communityView"
import AppContext from "../services/context"
import { useCookies } from "react-cookie"
import { checkAuth } from "../services/api"
import { getNotices, getNoticeCategories } from "../services/api"
//
export default function Community() {
  const [loaded, setLoaded] = React.useState(false)
  const { appState, appDispatch } = React.useContext(AppContext)
  const [cookies] = useCookies()
  const [currentTab, setCurrentTab] = React.useState(0)
  //
  // Notice..
  const [noticeData, setNoticeData] = React.useState({
    page: 0,
    count: 0,
    data: []
  })
  const [noticeCategoryMap, setNoticeCategoryMap] = React.useState({})
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
      //
      if (appState.noticeCategories.length === 0) {
        let result_2 = await getNoticeCategories()
        if (result_2) {
          appDispatch({
            type: "UpdateNoticeCategories",
            payload: result_2.data
          })
        }
      }
      //
      let map = {}
      for (let cat of appState.noticeCategories) {
        map[cat.id] = cat.label
      }
      await setNoticeCategoryMap(map)
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
      noticeCategoryMap={noticeCategoryMap}
    />
  )
}
