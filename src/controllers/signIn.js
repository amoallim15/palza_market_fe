import React from "react"
import SignInView from "../views/signInView"
import AppContext from "../services/context"
import { useCookies } from "react-cookie"
import { checkAuth, getSettings } from "../services/api"
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { signIn } from "../services/api"
//
export default function SignIn() {
  const [loaded, setLoaded] = React.useState(false)
  const { appState, appDispatch } = React.useContext(AppContext)
  const [cookies, setCookie, removeCookie] = useCookies()
  const history = useHistory()
  //
  const methods = useForm({
    criteriaMode: "all",
    mode: "onSubmit",
    defaultValues: {}
  })
  //
  React.useEffect(() => {
    ;(async () => {
      if ("token" in cookies) {
        if (!(await checkAuth(cookies["token"]))) {
          appDispatch({ type: "UpdateIsAuth", payload: false })
          removeCookie("token")
        } else {
          appDispatch({ type: "UpdateIsAuth", payload: true })
          history.replace("/")
        }
      }
      //
      if (!appState.appSettings) {
        const result = await getSettings()
        if (result) appDispatch({ type: "UpdateSettings", payload: result })
      }
      //
      await setLoaded(true)
    })()
  }, [appState.appSettings, cookies, removeCookie, appDispatch, history])
  //
  const onSubmit = async (data) => {
    const result = await signIn(data)
    if (!result) return
    await setCookie("token", result, {
      path: "/",
      maxAge: 86400 /* 1 day = (30 * 30 * 24) */
    })
    history.push("/")
  }
  //
  if (!loaded) return <div />
  return (
    <SignInView
      isAuth={appState.isAuth}
      userRole={appState.currentUser?.user_role}
      userType={appState.currentUser?.user_type}
      settings={appState.appSettings}
      methods={methods}
      onSubmit={onSubmit}
    />
  )
}
