import React from "react"
import HomeView from "../views/homeView"
import AppContext from "../services/context"
import { useCookies } from "react-cookie"
import { checkAuth } from "../services/api"
//
export default function Home() {
  const [loaded, setLoaded] = React.useState(false)
  const { appState, appDispatch } = React.useContext(AppContext)
  const [cookies] = useCookies()
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
      await setLoaded(true)
    })()
  }, [appDispatch, appState.currentUser, cookies])
  //
  if (!loaded) return <div />
  return (
    <HomeView
      isAuth={appState.isAuth}
      userRole={appState.currentUser?.user_role}
      userType={appState.currentUser?.user_type}
    />
  )
}
