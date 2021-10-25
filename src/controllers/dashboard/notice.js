import React from "react"
import {
  getNoticeCategories,
  getNotices,
  deleteNotice
} from "../../services/api"
import NoticeView from "../../views/dashboard/noticeView"
import { useHistory } from "react-router-dom"
import AppContext from "../../services/context"
import { useCookies } from "react-cookie"
//
export default function Notice() {
  const [loaded, setLoaded] = React.useState(false)
  const { appState, appDispatch } = React.useContext(AppContext)
  const history = useHistory()
  const [cookies] = useCookies()
  const [noticeData, setNoticeData] = React.useState({
    page: 0,
    count: 0,
    data: []
  })
  const [noticeCategoryMap, setNoticeCategoryMap] = React.useState({})
  const [currentTab, setCurrentTab] = React.useState(0)
  //
  const onTabChange = (event, newValue) => {
    setCurrentTab(newValue)
  }
  //
  React.useEffect(() => {
    ;(async () => {
      if (!["ADMIN", "EMPLOYEE"].includes(appState.currentUser.user_role))
        history.replace("/dashboard/profile")
      //
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
  }, [
    appDispatch,
    appState.currentUser.user_role,
    history,
    appState.noticeCategories
  ])
  //
  const onNoticeCreateClick = (e) => {
    history.push("/dashboard/notice/alter")
  }
  //
  const onNoticeEditClick = (e, item) => {
    history.push(`/dashboard/notice/alter/${item.id}`)
  }
  const onNoticeDeleteClick = async (e, item) => {
    const result = await deleteNotice(item.id, cookies["token"])
    if (!result) return
    let result_2 = await getNotices(0)
    if (result_2) await setNoticeData(result_2)
  }
  //
  const onPageChange = async (e, newPage) => {
    const result = await getNotices(newPage)
    if (result) await setNoticeData(result)
  }
  //
  if (!loaded) return <div />
  return (
    <NoticeView
      currentTab={currentTab}
      onTabChange={onTabChange}
      noticeData={noticeData}
      noticeCategoryData={appState.noticeCategories}
      noticeCategoryMap={noticeCategoryMap}
      onNoticeCreateClick={onNoticeCreateClick}
      onNoticeEditClick={onNoticeEditClick}
      onNoticeDeleteClick={onNoticeDeleteClick}
      onPageChange={onPageChange}
    />
  )
}
