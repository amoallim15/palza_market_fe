import React from "react"
import AppContext from "../services/context"
import { useCookies } from "react-cookie"
import DashboardView from "../views/dashboardView"
import { checkAuth } from "../services/api"
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
      if (!appState.currentUser && cookies["token"]) {
        const result = await checkAuth(cookies["token"])
        if (result) {
          appDispatch({ type: "UpdateCurrentUser", payload: result })
          appDispatch({ type: "UpdateIsAuth", payload: true })
        } else {
          appDispatch({ type: "UpdateIsAuth", payload: false })
        }
      }
      //
      if (!appState.isAuth) {
        history.replace("/sign-in")
        return
      }
      //
      await setLoaded(true)
    })()
  }, [appDispatch, appState.currentUser, cookies, appState.isAuth, history])
  //
  const handleItemClick = (e, item) => console.log(item)
  //
  if (!loaded) return <div />
  return (
    <DashboardView
      drawerOpen={drawerOpen}
      handleDrawer={() => setDrawerOpen(!drawerOpen)}
      handleItemClick={handleItemClick}
    />
  )
}
