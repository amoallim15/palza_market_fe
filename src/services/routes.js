import Home from "../controllers/home"
import Page404 from "../controllers/page404"
import Dashboard from "../controllers/dashboard"
import SignIn from "../controllers/signIn"
import SignUp from "../controllers/signUp"
import SignOut from "../controllers/signOut"
import About from "../controllers/about"
import Search from "../controllers/search"
import Sales from "../controllers/sales"
import Hub from "../controllers/hub"
import Agency from "../controllers/agency"
import Community from "../controllers/community"
import Profile from "../controllers/profile"
//
export const HomeRoutes = [
  {
    path: ["/dashboard"],
    component: Dashboard
  },
  {
    path: ["/", "/home"],
    component: Home,
    exact: true
  },
  {
    path: ["/sign-in"],
    component: SignIn,
    exact: true
  },
  {
    path: ["/sign-up"],
    component: SignUp,
    exact: true
  },
  {
    path: ["/sign-out"],
    component: SignOut,
    exact: true
  },
  {
    path: ["/about"],
    component: About,
    exact: true
  },
  {
    path: ["/search"],
    component: Search,
    exact: true
  },
  {
    path: ["/sales"],
    component: Sales,
    exact: true
  },
  {
    path: ["/hub"],
    component: Hub,
    exact: true
  },
  {
    path: ["/community"],
    component: Community,
    exact: true
  },
  {
    path: ["/agency"],
    component: Agency,
    exact: true
  },
  {
    path: ["/"],
    component: Page404
  }
]
//
export const DashboardRoutes = [
  {
    path: ["/dashboard/profile"],
    component: Profile,
    exact: true
  }
]
