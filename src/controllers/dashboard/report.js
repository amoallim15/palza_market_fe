import React from "react"
import { getReports, deleteReport } from "../../services/api"
import ReportView from "../../views/dashboard/reportView"
import { useCookies } from "react-cookie"
//
export default function Report() {
  const [loaded, setLoaded] = React.useState(false)
  const [cookies] = useCookies()
  const [reportData, setReportData] = React.useState({
    page: 0,
    count: 0,
    data: []
  })
  //
  React.useEffect(() => {
    ;(async () => {
      let result = await getReports(0, cookies["token"])
      if (result) await setReportData(result)
      //
      await setLoaded(true)
    })()
  }, [cookies])
  //
  // const onCreateClick = (e) => {
  //   history.push("/dashboard/report/alter")
  // }
  //
  // const onEditClick = (e, item) => {
  //   history.push(`/dashboard/report/alter/${item.id}`)
  // }
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
      onDeleteClick={onDeleteClick}
      onPageChange={onPageChange}
    />
    // onCreateClick={onCreateClick}
    // onEditClick={onEditClick}
  )
}
