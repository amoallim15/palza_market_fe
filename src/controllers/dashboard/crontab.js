import React from "react"
import { getCrontabs, createCrontab } from "../../services/api"
import CrontabView from "../../views/dashboard/crontabView"
import { useCookies } from "react-cookie"
import AppContext from "../../services/context"
import { useHistory } from "react-router-dom"
//
const chipColors = {
  CREATED: "primary",
  RUNNING: "warning",
  SUCCEEDED: "success",
  FAILED: "error"
}
//
export default function Crontab() {
  const [loaded, setLoaded] = React.useState(false)
  const [cookies] = useCookies()
  const { appState } = React.useContext(AppContext)
  const history = useHistory()
  const [crontabData, setCrontabData] = React.useState({
    page: 0,
    count: 0,
    data: []
  })
  //
  React.useEffect(() => {
    ;(async () => {
      if (!["ADMIN", "EMPLOYEE"].includes(appState.currentUser.user_role))
        history.replace("/dashboard/profile")
      //
      let result = await getCrontabs(0, cookies["token"])
      if (result) await setCrontabData(result)
      //
      await setLoaded(true)
    })()
  }, [cookies, appState.currentUser.user_role, history])
  //
  const onCreateClick = async (e) => {
    const result = await createCrontab(cookies["token"])
    if (!result) return
    let result_2 = await getCrontabs(0)
    if (result_2) await setCrontabData(result_2)
  }
  //
  const onRefreshClick = async (e) => {
    let result = await getCrontabs(0, cookies["token"])
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
