import React from "react"
import AppContext from "../../services/context"
import { useCookies } from "react-cookie"
import DashboardView from "../../views/dashboard/dashboardView"
import { checkAuth, getSettings } from "../../services/api"
import { useHistory } from "react-router-dom"
//
export default function Dashboard() {
  const [loaded, setLoaded] = React.useState(false)
  const { appState, appDispatch } = React.useContext(AppContext)
  const [cookies, , removeCookie] = useCookies()
  const [drawerOpen, setDrawerOpen] = React.useState(true)
  const history = useHistory()
  //
  React.useEffect(() => {
    ;(async () => {
      //
      if (cookies["token"]) {
        if (appState.currentUser === null) {
          const result = await checkAuth(cookies["token"])
          if (result) {
            await appDispatch({ type: "UpdateCurrentUser", payload: result })
            appDispatch({ type: "UpdateIsAuth", payload: true })
          } else {
            await appDispatch({ type: "UpdateIsAuth", payload: false })
            await removeCookie("token")
            history.replace("/sign-in")
          }
        } else {
          // nothing
        }
      } else {
        await removeCookie("token")
        history.replace("/sign-in")
      }
      //
      if (appState.appSettings === null) {
        const result = await getSettings()
        if (result) appDispatch({ type: "UpdateSettings", payload: result })
      }
      //
      await setLoaded(true)
    })()
  }, [
    appDispatch,
    appState.currentUser,
    cookies,
    history,
    appState.appSettings,
    removeCookie
  ])
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
      userRole={appState.currentUser.user_role}
      userType={appState.currentUser.user_type}
    />
  )
}
