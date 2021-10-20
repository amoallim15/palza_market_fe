import React from "react"
import { Link, useLocation } from "react-router-dom"
import MenuClosedIcon from "../assets/icons/menu-closed.svg"
import MenuOpenIcon from "../assets/icons/menu-open.svg"
import logo from "../assets/imgs/logo.png"
import Lang from "../services/lang"

//
export const AppBarHome = ({ isLocationMatch, isMobile }) => {
  //
  return (
    <>
      <Link
        to={"/about"}
        className={
          "px-3 py-2 rounded-md text-sm font-medium" +
          (isMobile ? " block" : "") +
          (isLocationMatch("/about")
            ? ""
            : "")
        }
      >
        {Lang.about}
      </Link>
      {/**/}
      <Link
        to={"/search"}
        className={
          "px-3 py-2 rounded-md text-sm font-medium" +
          (isMobile ? " block" : "") +
          (isLocationMatch("/search")
            ? ""
            : "")
        }
      >
        {Lang.realstateSearch}
      </Link>
      {/**/}
      <Link
        to={"/sales"}
        className={
          "px-3 py-2 rounded-md text-sm font-medium" +
          (isMobile ? " block" : "") +
          (isLocationMatch("/sales")
            ? ""
            : "")
        }
      >
        {Lang.realstateSales}
      </Link>
      {/**/}
      <Link
        to={"/hub"}
        className={
          "px-3 py-2 rounded-md text-sm font-medium" +
          (isMobile ? " block" : "") +
          (isLocationMatch("/hub")
            ? ""
            : "")
        }
      >
        {Lang.realstateHub}
      </Link>
      {/**/}
      <Link
        to={"/community"}
        className={
          "px-3 py-2 rounded-md text-sm font-medium" +
          (isMobile ? " block" : "") +
          (isLocationMatch("/community")
            ? ""
            : "")
        }
      >
        {Lang.community}
      </Link>
    </>
  )
}
//
export const AppBarProfile = ({ isLocationMatch }) => {
  const ref = React.useRef()
  const [itemShown, setItemShown] = React.useState(false)
  //
  React.useEffect(() => {
    const closeMenu = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setItemShown(false)
    }
    //
    document.addEventListener("mousedown", closeMenu)
    return () => document.removeEventListener("mousedown", closeMenu)
  }, [itemShown])
  //
  return (
    <div ref={ref} className="ml-3 relative">
      <button
        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none"
        onClick={() => setItemShown(true)}
      >
        {Lang.profile}
      </button>
      {/**/}
      {itemShown && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {/**/}
          <Link
            to={"/dashboard/profile"}
            className={
              "hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700" +
              (isLocationMatch("/dashboard/profile") ? " bg-gray-100" : "")
            }
          >
            {Lang.profile}
          </Link>
          {/**/}
          <Link
            to={"/dashboard/wishlist"}
            className={
              "hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700" +
              (isLocationMatch("/dashboard/wishlist") ? " bg-gray-100" : "")
            }
          >
            {Lang.wishlist}
          </Link>
          {/**/}
          <Link
            to={"/dashboard/realstates"}
            className={
              "hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700" +
              (isLocationMatch("/dashboard/realstates") ? " bg-gray-100" : "")
            }
          >
            {Lang.realstates}
          </Link>
          {/**/}
          <Link
            to={"/dashboard/reviews"}
            className={
              "hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700" +
              (isLocationMatch("/dashboard/reviews") ? " bg-gray-100" : "")
            }
          >
            {Lang.reviews}
          </Link>
          {/**/}
          <Link
            to={"/dashboard/config"}
            className={
              "hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700" +
              (isLocationMatch("/dashboard/config") ? " bg-gray-100" : "")
            }
          >
            {Lang.config}
          </Link>
          {/**/}
          <Link
            to={"/dashboard/sms"}
            className={
              "hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700" +
              (isLocationMatch("/dashboard/sms") ? " bg-gray-100" : "")
            }
          >
            {Lang.smsMessages}
          </Link>
          {/**/}
          <div className="pt-1 pb-1">
            <div className="border-t" />
          </div>
          {/**/}
          <Link
            to={"/sign-out"}
            className={
              "hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700"
            }
          >
            {Lang.signOut}
          </Link>
        </div>
      )}
    </div>
  )
}
//
export default function HomeAppBar({ isAuth, userRole, userType }) {
  const [mobileMenuShown, setMobileMenuShown] = React.useState(false)
  const location = useLocation()
  //
  const isLocationMatch = (link) => {
    return location.pathname === link
  }
  //
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between h-16">
          {/**/}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
                <AppBarHome isLocationMatch={isLocationMatch} />
              </div>
            </div>
          </div>
          {/**/}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {!isAuth && (
              <>
                <Link
                  to={"/sign-in"}
                  className={
                    "px-3 py-2 rounded-md text-sm font-medium" +
                    (isLocationMatch("/sign-in")
                      ? ""
                      : "")
                  }
                >
                  {Lang.signIn}
                </Link>
                {/**/}
                <Link
                  to={"/sign-up"}
                  className={
                    "px-3 py-2 rounded-md text-sm font-medium" +
                    (isLocationMatch("/sign-up")
                      ? ""
                      : "")
                  }
                >
                  {Lang.signUp}
                </Link>    
                {/**/}
                <Link
                to={"/agency"}
                className={
                "px-3 py-2 rounded-md text-sm font-medium hidden lg:block" +
                (isLocationMatch("/agency")
                ? " text-yellow-500"
                : " text-yellow-500")
                  }
                >
                {Lang.agencyLanding
                }
                </Link>          
              </>
            )}
            {/**/}
            {isAuth && (
              <AppBarProfile
                userRole={userRole}
                userType={userType}
                isLocationMatch={isLocationMatch}
              />
            )}
          </div>
          {/**/}
        </div>
      </div>
      {/**/}
      <div className="sm:hidden" id="mobile-menu" hidden={!mobileMenuShown}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <AppBarHome isLocationMatch={isLocationMatch} isMobile={true} />
        </div>
      </div>
    </nav>
  )
}
