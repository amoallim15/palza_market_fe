import React from "react"
import { getNoticeCategories, getNotices } from "../../services/api"
import NoticeView from "../../views/dashboard/noticeView"
import { useHistory } from "react-router-dom"
import AppContext from "../../services/context"
//
export default function Notice() {
  const [loaded, setLoaded] = React.useState(false)
  const { appState, appDispatch } = React.useContext(AppContext)
  const history = useHistory()
  const [noticeData, setNoticeData] = React.useState({
    page: 0,
    count: 0,
    data: []
  })
  const [noticeCategoryData, setNoticeCategoryData] = React.useState({
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
      if (appState.noticeCategories.length < 0) {
        let result_1 = await getNoticeCategories()
        if (result_1) {
          await setNoticeCategoryData(result_1)
          appDispatch({
            type: "UpdateNoticeCategories",
            payload: result_1.data
          })
        }
      }
      //
      let result_2 = await getNotices(0)
      if (result_2) await setNoticeData(result_2)
      //
      if (appState.noticeCategories.length > 0) {
        let map = {}
        for (let cat of appState.noticeCategories) {
          map[cat._id] = cat.name
        }
        await setNoticeCategoryMap(map)
      }
      //
      await setLoaded(true)
    })()
  }, [appDispatch, appState.noticeCategories])
  //
  const onCreateClick = (e) => {
    history.push("/dashboard/notice/create")
  }
  //
  if (!loaded) return <div />
  return (
    <NoticeView
      currentTab={currentTab}
      onTabChange={onTabChange}
      noticeData={noticeData}
      noticeCategoryData={noticeCategoryData}
      noticeCategoryMap={noticeCategoryMap}
      onCreateClick={onCreateClick}
    />
  )
}
