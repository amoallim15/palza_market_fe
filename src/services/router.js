import React from "react"
import { Switch, Route } from "react-router-dom"
import * as Wrappers from "./wrappers"
//
import Home from "../pages/home/home"
import Page404 from "../pages/home/page404"
import SignIn from "../pages/auth/signIn"
import SignUp from "../pages/auth/signUp"
import Profile from "../pages/dashboard/profile"
import Configuration from "../pages/dashboard/configuration"
//
export const Routes = [
  {
    path: ["/dashboard/profile"],
    component: Profile,
    exact: true,
    wrappers: [Wrappers.UpdateCurrentUser, Wrappers.OnlyAuth]
  },
  {
    path: ["/dashboard/config"],
    component: Configuration,
    exact: true,
    wrappers: [
      Wrappers.UpdateCurrentUser,
      Wrappers.OnlyAuth,
      Wrappers.OnlyAdmin,
      Wrappers.UpdateSettings
    ]
  },
  {
    path: ["/sign-in"],
    component: SignIn,
    exact: true,
    wrappers: [
      Wrappers.OnlyAnony,
      Wrappers.UpdateSettings,
      Wrappers.UpdateAppBarMenus
    ]
  },
  {
    path: ["/sign-up"],
    component: SignUp,
    exact: true,
    wrappers: [
      Wrappers.OnlyAnony,
      Wrappers.UpdateSettings,
      Wrappers.UpdateAppBarMenus
    ]
  },
  {
    path: ["/sign-out"],
    exact: true,
    wrappers: [Wrappers.SignOut]
  },
  {
    path: ["/", "/home"],
    component: Home,
    exact: true,
    wrappers: [Wrappers.UpdateCurrentUser, Wrappers.UpdateAppBarMenus]
  },
  {
    path: ["/"],
    component: Page404
  }
]
//
const RouterWrapper = (Wrappers, Next) => {
  if ((Wrappers || []).length < 1) return Next
  const Wrapper = Wrappers.slice(-1).pop()
  const WrappedChild = (props) => Wrapper(props, Next)
  return RouterWrapper(Wrappers.slice(0, -1), WrappedChild)
}
//
const RouteHolder = (route) => {
  const Wrapper = RouterWrapper(route.wrappers, route.component)
  // const Wrapper = route.component
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <Wrapper {...props} />}
    />
  )
}
//
export default function RouterContainer({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => {
        return <RouteHolder key={index} {...route} />
      })}
    </Switch>
  )
}
