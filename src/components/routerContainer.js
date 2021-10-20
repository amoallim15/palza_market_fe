import React from "react"
import { Switch, Route } from "react-router-dom"
//
// const RouterWrapper = (Wrappers, Next) => {
//   if ((Wrappers || []).length < 1) return Next
//   const Wrapper = Wrappers.slice(-1).pop()
//   const WrappedChild = (props) => Wrapper(props, Next)
//   return RouterWrapper(Wrappers.slice(0, -1), WrappedChild)
// }
//
const RouteHolder = (route) => {
  // const Wrapper = RouterWrapper(route.wrappers, route.component)
  const Wrapper = route.component
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
