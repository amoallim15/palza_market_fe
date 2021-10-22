import React from "react"
import { getReports, deleteReport } from "../../services/api"
import MyReportView from "../../views/dashboard/myReportView"
import { useHistory } from "react-router-dom"
import { useCookies } from "react-cookie"
//
export default function MyReport() {
  const [loaded, setLoaded] = React.useState(false)
  const history = useHistory()
  const [cookies] = useCookies()
  const [reportData, setReportData] = React.useState({
    page: 0,
    count: 0,
    data: []
  })
  //
  React.useEffect(() => {
    ;(async () => {
      let result = await getReports(0)
      if (result) await setReportData(result)
      //
      await setLoaded(true)
    })()
  }, [])
  //
  const onCreateClick = (e) => {
    history.push("/dashboard/report/alter")
  }
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
    <MyReportView
      reportData={reportData}
      onCreateClick={onCreateClick}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
      onPageChange={onPageChange}
    />
  )
}
