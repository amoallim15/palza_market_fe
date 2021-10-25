import React from "react"
import HubView from "../views/hubView"
import AppContext from "../services/context"
import { useCookies } from "react-cookie"
import { checkAuth } from "../services/api"
import { getFranchises, getMagazines } from "../services/api"
import { useHistory } from "react-router-dom"
//
export default function Hub() {
  const [loaded, setLoaded] = React.useState(false)
  const { appState, appDispatch } = React.useContext(AppContext)
  const [cookies] = useCookies()
  const [currentTab, setCurrentTab] = React.useState(0)
  const history = useHistory()
  //
  // Franchise..
  const [franchiseData, setFranchiseData] = React.useState({
    info: { page: 0, count: 0 },
    data: []
  })
  const onFranchisePageChange = async (page) => {
    let result = await getFranchises(page)
    if (result) await setFranchiseData(result)
  }
  //
  const [magazineData, setMagazineData] = React.useState({
    info: { page: 0, count: 0 },
    data: []
  })
  const onMagazinePageChange = async (page) => {
    let result = await getMagazines(page)
    if (result) await setMagazineData(result)
  }
  const onMagazineViewClick = async (e, item) => {
    history.push(`/hub/magazine/${item.id}`)
  }
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
      // Franchise..
      let result_1 = await getFranchises(0)
      if (result_1) await setFranchiseData(result_1)
      // Magazine..
      let result_2 = await getMagazines(0)
      if (result_2) await setMagazineData(result_2)
      //
      await setLoaded(true)
    })()
  }, [appDispatch, appState.currentUser, cookies])
  //
  if (!loaded) return <div />
  return (
    <HubView
      isAuth={appState.isAuth}
      userRole={appState.currentUser?.user_role}
      userType={appState.currentUser?.user_type}
      currentTab={currentTab}
      onTabChange={(e, value) => setCurrentTab(value)}
      franchiseData={franchiseData}
      onFranchisePageChange={onFranchisePageChange}
      magazineData={magazineData}
      onMagazinePageChange={onMagazinePageChange}
      onMagazineViewClick={onMagazineViewClick}
    />
  )
}
