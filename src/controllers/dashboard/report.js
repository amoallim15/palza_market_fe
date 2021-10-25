import React from "react"
import { getReports, deleteReport } from "../../services/api"
import ReportView from "../../views/dashboard/reportView"
import { useHistory, useLocation } from "react-router-dom"
import { useCookies } from "react-cookie"
import AppContext from "../../services/context"
//
export default function Report() {
  const [loaded, setLoaded] = React.useState(false)
  const { appState } = React.useContext(AppContext)
  const history = useHistory()
  const [cookies] = useCookies()
  const location = useLocation()
  const [reportData, setReportData] = React.useState({
    page: 0,
    count: 0,
    data: []
  })
  const [isMy, setIsMy] = React.useState(
    !!location.pathname.includes("my-report")
  )
  //
  React.useEffect(() => {
    ;(async () => {
      const loc = !!location.pathname.includes("my-report")
      if (loc !== isMy) await setIsMy(loc)
      //
      if (
        !loc &&
        !["ADMIN", "EMPLOYEE"].includes(appState.currentUser.user_role)
      ) {
        history.replace("/dashboard/profile")
      }
      //
      let result = await getReports(0, cookies["token"])
      if (result) await setReportData(result)
      //
      await setLoaded(true)
    })()
  }, [
    cookies,
    location.pathname,
    isMy,
    history,
    appState.currentUser.user_role
  ])
  //
  const onEditClick = (e, item) => {
    history.push(`/dashboard/report/alter/${item.id}`)
  }
  //
  const onDeleteClick = async (e, item) => {
    const result = await deleteReport(item.id, cookies["token"])
    if (!result) return
    let result_2 = await getReports(0)
    if (result_2) await setReportData(result_2)
  }
  //
  const onPageChange = async (e, newPage) => {
    const result = await getReports(newPage)
    if (result) await setReportData(result)
  }
  //
  if (!loaded) return <div />
  return (
    <ReportView
      reportData={reportData}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
      onPageChange={onPageChange}
      isMy={isMy}
    />
  )
}
