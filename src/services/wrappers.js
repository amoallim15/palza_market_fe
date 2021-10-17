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
  const { appState, appDispatch } = React.useContext(AppContext)
  const [cookies] = useCookies(["token"])
  const [state, setState] = React.useState(null)
  //
  React.useEffect(() => {
    //
    let action = {}
    if (!("token" in cookies) || !appState.currentUser) {
      action = {
        type: "UpdateAppBarMenus",
        payload: [mainAppBarMenu, anonySecondaryAppBarMenu]
      }
    } else {
      let secMenu = authSecondaryAppBarMenu
      secMenu[0].children = secMenu[0].children.filter((item, index) => {
        if (item.user_type && item.user_type !== appState.currentUser.user_type)
          return false
        if (
          item.user_role &&
          !item.user_role.includes(appState.currentUser.user_role)
        )
          return false
        return true
      })
      action = {
        type: "UpdateAppBarMenus",
        payload: [mainAppBarMenu, secMenu]
      }
    }
    //
    appDispatch(action)
    setState(true)
  }, [appDispatch, appState.currentUser, cookies])
  //
  if (state === true) return <Next {...props} />
  return <div />
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
      if ("token" in cookies && (await checkAuth(cookies["token"]))) {
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
  const [state, setState] = React.useState(null)
  const history = useHistory()
  React.useEffect(() => {
    removeCookie("token")
    setState(true)
  }, [history, removeCookie])
  if (state === true) return <Redirect to="/" />
  return <div />
}
//
export const UpdateSettings = (props, Next) => {
  const { appState, appDispatch } = React.useContext(AppContext)
  const [state, setState] = React.useState(null)
  React.useEffect(() => {
    ;(async () => {
      if (!appState.appSettings) {
        const result = await getSettings()
        if (result) appDispatch({ type: "UpdateSettings", payload: result })
      }
      setState(true)
    })()
  }, [appDispatch, appState.appSettings])
  if (state === true) return <Next {...props} />
  return <div />
}
//
export const UpdateCurrentUser = (props, Next) => {
  const { appState, appDispatch } = React.useContext(AppContext)
  const [state, setState] = React.useState(null)
  const [cookies] = useCookies(["token"])
  React.useEffect(() => {
    ;(async () => {
      if (!appState.currentUser && cookies["token"]) {
        const result = await checkAuth(cookies["token"])
        if (result) appDispatch({ type: "UpdateCurrentUser", payload: result })
      }
      setState(true)
    })()
  })
  if (state === true) return <Next {...props} />
  return <div />
}
//
export const OnlyAdmin = (props, Next) => {
  const { appDispatch } = React.useContext(AppContext)
  const [cookies] = useCookies(["token"])
  const [state, setState] = React.useState(null)
  React.useEffect(() => {
    ;(async () => {
      const result = await checkAuth(cookies["token"])
      if (
        !result ||
        result.user_role === "CLIENT" ||
        result.user_role === "EMPLOYEE"
      ) {
        setState(false)
        return
      }
      setState(true)
    })()
  }, [appDispatch, cookies])
  if (state === true) return <Next {...props} />
  else if (state === false) return <Redirect to="/dashboard/profile" />
  return <div />
}
//
export const OnlyBackOffice = (props, Next) => {
  const { appDispatch } = React.useContext(AppContext)
  const [cookies] = useCookies(["token"])
  const [state, setState] = React.useState(null)
  React.useEffect(() => {
    ;(async () => {
      const result = await checkAuth(cookies["token"])
      if (!result || result.user_role === "CLIENT") {
        setState(false)
        return
      }
      setState(true)
    })()
  }, [appDispatch, cookies])
  if (state === true) return <Next {...props} />
  else if (state === false) return <Redirect to="/dashboard/profile" />
  return <div />
}
//
export const OnlyAgency = (props, Next) => {
  const { appDispatch } = React.useContext(AppContext)
  const [cookies] = useCookies(["token"])
  const [state, setState] = React.useState(null)
  React.useEffect(() => {
    ;(async () => {
      const result = await checkAuth(cookies["token"])
      if (!result || result.user_type === "INDIVIDUAL") {
        setState(false)
        return
      }
      setState(true)
    })()
  }, [appDispatch, cookies])
  if (state === true) return <Next {...props} />
  else if (state === false) return <Redirect to="/dashboard/profile" />
  return <div />
}
//
export const OnlyIndividual = (props, Next) => {
  const { appDispatch } = React.useContext(AppContext)
  const [cookies] = useCookies(["token"])
  const [state, setState] = React.useState(null)
  React.useEffect(() => {
    ;(async () => {
      const result = await checkAuth(cookies["token"])
      if (!result || result.user_type === "AGENCY") {
        setState(false)
        return
      }
      setState(true)
    })()
  }, [appDispatch, cookies])
  if (state === true) return <Next {...props} />
  else if (state === false) return <Redirect to="/dashboard/profile" />
  return <div />
}
