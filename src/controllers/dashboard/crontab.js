import React from "react"
import { getCrontabs, createCrontab } from "../../services/api"
import CrontabView from "../../views/dashboard/crontabView"
import { useCookies } from "react-cookie"
//
const chipColors = {
  RUNNING: "warning",
  SUCCEEDED: "success",
  FAILED: "error"
}
//
export default function Crontab() {
  const [loaded, setLoaded] = React.useState(false)
  const [cookies] = useCookies()
  const [crontabData, setCrontabData] = React.useState({
    page: 0,
    count: 0,
    data: []
  })
  //
  React.useEffect(() => {
    ;(async () => {
      let result = await getCrontabs(0)
      if (result) await setCrontabData(result)
      //
      await setLoaded(true)
    })()
  }, [])
  //
  const onCreateClick = async (e) => {
    const result = await createCrontab(cookies["token"])
    if (!result) return
    let result_2 = await getCrontabs(0)
    if (result_2) await setCrontabData(result_2)
  }
  //
  const onRefreshClick = async (e) => {
    let result = await getCrontabs(0)
    if (result) await setCrontabData(result)
  }
  //
  const onPageChange = async (e, newPage) => {
    const result = await getCrontabs(newPage)
    if (result) await setCrontabData(result)
  }
  //
  if (!loaded) return <div />
  return (
    <CrontabView
      crontabData={crontabData}
      onCreateClick={onCreateClick}
      onPageChange={onPageChange}
      onRefreshClick={onRefreshClick}
      chipColors={chipColors}
    />
  )
}
