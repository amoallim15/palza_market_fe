import React from "react"
import { useCookies } from "react-cookie"
import { Redirect } from "react-router-dom"
import AppContext from "../services/context"
//
export default function SignOut() {
  const [, , removeCookie] = useCookies()
  const { appDispatch } = React.useContext(AppContext)
  const [loaded, setLoaded] = React.useState(false)
  //
  React.useEffect(() => {
    ;(async () => {
      await removeCookie("token")
      await appDispatch({ type: "UpdateIsAuth", payload: false })
      await setLoaded(true)
      console.log("test")
    })()
  }, [removeCookie, appDispatch])
  //
  if (!loaded) return <div />
  return <Redirect to="/" />
}
