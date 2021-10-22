import React from "react"
import { getFranchises, deleteFranchise } from "../../services/api"
import FranchiseView from "../../views/dashboard/franchiseView"
import { useHistory } from "react-router-dom"
import { useCookies } from "react-cookie"
import AppContext from "../../services/context"
//
export default function Franchise() {
  const [loaded, setLoaded] = React.useState(false)
  const { appState } = React.useContext(AppContext)
  const history = useHistory()
  const [cookies] = useCookies()
  const [franchiseData, setFranchiseData] = React.useState({
    page: 0,
    count: 0,
    data: []
  })
  //
  React.useEffect(() => {
    ;(async () => {
      if (!["ADMIN", "EMPLOYEE"].includes(appState.currentUser.user_role))
        history.replace("/dashboard/profile")
      //
      let result = await getFranchises(0)
      if (result) await setFranchiseData(result)
      //
      await setLoaded(true)
    })()
  }, [history, appState.currentUser.user_role])
  //
  const onCreateClick = (e) => {
    history.push("/dashboard/franchise/alter")
  }
  //
  const onEditClick = (e, item) => {
    history.push(`/dashboard/franchise/alter/${item.id}`)
  }
  //
  const onDeleteClick = async (e, item) => {
    const result = await deleteFranchise(item.id, cookies["token"])
    if (!result) return
    let result_2 = await getFranchises(0)
    if (result_2) await setFranchiseData(result_2)
  }
  //
  const onPageChange = async (e, newPage) => {
    const result = await getFranchises(newPage)
    if (result) await setFranchiseData(result)
  }
  //
  if (!loaded) return <div />
  return (
    <FranchiseView
      franchiseData={franchiseData}
      onCreateClick={onCreateClick}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
      onPageChange={onPageChange}
    />
  )
}
