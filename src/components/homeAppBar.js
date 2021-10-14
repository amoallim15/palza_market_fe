import React from "react"
import AppContext from "../services/context"
import logo from "../assets/imgs/logo.png"
import MenuClosedIcon from "../assets/icons/menu-closed.svg"
import MenuOpenIcon from "../assets/icons/menu-open.svg"
import { Link, useLocation } from "react-router-dom"

const AppBarLink = ({ item, className }) => {
  const location = useLocation()
  let classes = className + " px-3 py-2 rounded-md text-sm font-medium "
  //
  if (location.pathname === item.link) {
    classes += "bg-gray-900 text-white"
  } else {
    classes += "text-gray-300 hover:bg-gray-700 hover:text-white"
  }
  //
  return (
    <Link to={item.link} className={classes}>
      {item.name}
    </Link>
  )
}
//
const AppBarLinkGroup = ({ item, className }) => {
  const location = useLocation()
  const ref = React.useRef()
  const [shown, setShown] = React.useState(false)
  let classes =
    className + " hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700 "
  for (let child of item.children) {
    child.className = classes
    if (location.pathname === child.link) {
      child.className += "bg-gray-100"
    }
  }
  //
  React.useEffect(() => {
    const closeMenu = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setShown(false)
    }
    document.addEventListener("mousedown", closeMenu)
    return () => document.removeEventListener("mousedown", closeMenu)
  }, [shown])
  //
  return (
    <div ref={ref} className="ml-3 relative">
      <button
        type="button"
        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none"
        onClick={() => setShown(!shown)}
      >
        {item.name}
      </button>
      {shown && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {item.children.map((sub_item, index) => {
            switch (sub_item.type) {
              case "divider":
                return (
                  <div className="pt-1 pb-1">
                    <div className="border-t" />
                  </div>
                )
              case "link":
              default:
                return (
                  <Link to={sub_item.link} className={sub_item.className}>
                    {sub_item.name}
                  </Link>
                )
            }
          })}
        </div>
      )}
    </div>
  )
}
//
const AppBarItem = ({ item, className }) => {
  switch (item.type) {
    case "group":
      return <AppBarLinkGroup item={item} className={className} />
    case "divider":
      return <div className="divide-gray-200" />
    case "link":
    default:
      return <AppBarLink item={item} className={className} />
  }
}
//
export default function HomeAppBar() {
  const { appState } = React.useContext(AppContext)
  const [mobileMenuShown, setMobileMenuShown] = React.useState(false)
  //
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/**/}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setMobileMenuShown(!mobileMenuShown)}
            >
              {!mobileMenuShown && (
                <img
                  className="block h-6 w-6"
                  src={MenuClosedIcon}
                  alt="closed"
                />
              )}
              {mobileMenuShown && (
                <img className="block h-6 w-6" src={MenuOpenIcon} alt="open" />
              )}
            </button>
          </div>
          {/**/}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src={logo}
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src={logo}
                alt="Workflow"
              />
            </Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/*<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}
                {appState.appBarMenus[0].map((item, index) => (
                  <AppBarItem key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
          {/**/}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {appState.appBarMenus[1].map((item, index) => (
              <AppBarItem key={index} item={item} />
            ))}
          </div>
          {/**/}
        </div>
      </div>
      {/**/}
      <div className="sm:hidden" id="mobile-menu" hidden={!mobileMenuShown}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {appState.appBarMenus[0].map((item, index) => (
            <AppBarItem key={index} item={item} className="block" />
          ))}
        </div>
      </div>
    </nav>
  )
}
