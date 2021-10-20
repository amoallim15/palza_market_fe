import React from "react"
import AppContext from "../services/context"
import { useCookies } from "react-cookie"
import DashboardView from "../views/dashboardView"
import { checkAuth, getSettings } from "../services/api"
import { useHistory } from "react-router-dom"
//
export default function Dashboard() {
  const [loaded, setLoaded] = React.useState(false)
  const { appState, appDispatch } = React.useContext(AppContext)
  const [cookies] = useCookies()
  const [drawerOpen, setDrawerOpen] = React.useState(true)
  const history = useHistory()
  //
  React.useEffect(() => {
    ;(async () => {
      //
      if (!appState.appSettings) {
        const result = await getSettings()
        if (result) appDispatch({ type: "UpdateSettings", payload: result })
      }
      //
      if (!appState.currentUser && cookies["token"]) {
        const result = await checkAuth(cookies["token"])
        if (result) {
          await appDispatch({ type: "UpdateCurrentUser", payload: result })
          appDispatch({ type: "UpdateIsAuth", payload: true })
        } else {
          await appDispatch({ type: "UpdateIsAuth", payload: false })
          history.replace("/sign-in")
        }
      }
      //
      await setLoaded(true)
    })()
  }, [appDispatch, appState.currentUser, cookies, appState.isAuth, history, appState.appSettings])
  //
  const onItemClick = (e, item) => console.log(item)
  //
  if (!loaded) return <div />
  return (
    <DashboardView
      drawerOpen={drawerOpen}
      handleDrawer={() => setDrawerOpen(!drawerOpen)}
      handleItemClick={onItemClick}
      title={appState.appSettings.title}
    />
  )
}
