import React from "react"
import SalesView from "../views/salesView"
import AppContext from "../services/context"
import { useCookies } from "react-cookie"
import { checkAuth, getRealstates } from "../services/api"
//
export default function Sales() {
  const [loaded, setLoaded] = React.useState(false)
  const { appState, appDispatch } = React.useContext(AppContext)
  const [cookies] = useCookies()
  //
  const [realstateData, setRealstateData] = React.useState({
    info: { page: 0, count: 0 },
    data: []
  })
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
      // Franchise..
      let result_1 = await getRealstates(0)
      if (result_1) await setRealstateData(result_1)
      // 
      await setLoaded(true)
    })()
  }, [appDispatch, appState.currentUser, cookies])
  //
  if (!loaded) return <div />
  return (
    <SalesView
      isAuth={appState.isAuth}
      userRole={appState.currentUser?.user_role}
      userType={appState.currentUser?.user_type}
    />
  )
}
