import React from "react"
import AppContext from "./context"
import { useCookies } from "react-cookie"
import { useHistory, Redirect } from "react-router-dom"
import {
  mainAppBarMenu,
  anonySecondaryAppBarMenu,
  authSecondaryAppBarMenu
} from "./menus"
import { getSettings, checkAuth } from "./api"
//
export const UpdateAppBarMenus = (props, Next) => {
  const { appDispatch } = React.useContext(AppContext)
  const [cookies] = useCookies(["token"])
  //
  React.useEffect(() => {
    let action = {}
    if ("token" in cookies) {
      action = {
        type: "UpdateAppBarMenus",
        payload: [mainAppBarMenu, authSecondaryAppBarMenu]
      }
    } else {
      action = {
        type: "UpdateAppBarMenus",
        payload: [mainAppBarMenu, anonySecondaryAppBarMenu]
      }
    }
    appDispatch(action)
  }, [appDispatch, cookies])
  //
  return <Next {...props} />
}
//
export const OnlyAnony = (props, Next) => {
  const [cookies] = useCookies(["token"])
  const [state, setState] = React.useState(null)
  React.useEffect(() => {
    if (!("token" in cookies)) setState(true)
    else setState(false)
  }, [cookies, setState])
  //
  if (state === true) return <Next {...props} />
  else if (state === false) return <Redirect to="/" />
  return <div />
}
//
export const OnlyAuth = (props, Next) => {
  const [cookies, , removeCookie] = useCookies(["token"])
  const [state, setState] = React.useState(null)
  React.useEffect(() => {
    ;(async () => {
      if ("token" in cookies && (await checkAuth())) {
        setState(true)
        return
      }
      removeCookie("token")
      setState(false)
    })()
  }, [cookies, setState, removeCookie])
  if (state === true) return <Next {...props} />
  else if (state === false) return <Redirect to="/sign-in" />
  return <div />
}
//
export const SignOut = (props, Next) => {
  const [, , removeCookie] = useCookies(["token"])
  const history = useHistory()
  React.useEffect(() => {
    removeCookie("token")
    history.redirect("/")
  }, [history, removeCookie])
  return <Redirect to="/" />
}
//
export const UpdateSettings = (props, Next) => {
  const { appDispatch } = React.useContext(AppContext)
  React.useEffect(() => {
    ;(async () => {
      const result = await getSettings()
      if (!result) return
      appDispatch({ type: "UpdateSettings", payload: result })
    })()
  }, [appDispatch])
  return <Next {...props} />
}
