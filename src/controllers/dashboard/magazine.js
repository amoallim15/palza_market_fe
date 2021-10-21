import React from "react"
import { getMagazines, deleteMagazine } from "../../services/api"
import MagazineView from "../../views/dashboard/magazineView"
import { useHistory } from "react-router-dom"
import { useCookies } from "react-cookie"
//
export default function Magazine() {
  const [loaded, setLoaded] = React.useState(false)
  const history = useHistory()
  const [cookies] = useCookies()
  const [magazineData, setMagazineData] = React.useState({
    page: 0,
    count: 0,
    data: []
  })
  //
  React.useEffect(() => {
    ;(async () => {
      let result = await getMagazines(0)
      if (result) await setMagazineData(result)
      //
      await setLoaded(true)
    })()
  }, [])
  //
  const onCreateClick = (e) => {
    history.push("/dashboard/magazine/alter")
  }
  //
  const onEditClick = (e, item) => {
    history.push(`/dashboard/magazine/alter/${item.id}`)
  }
  //
  const onDeleteClick = async (e, item) => {
    const result = await deleteMagazine(item.id, cookies["token"])
    if (!result) return
    let result_2 = await getMagazines(0)
    if (result_2) await setMagazineData(result_2)
  }
  //
  const onPageChange = async (e, newPage) => {
    const result = await getMagazines(newPage)
    if (result) await setMagazineData(result)
  }
  //
  if (!loaded) return <div />
  return (
    <MagazineView
      magazineData={magazineData}
      onCreateClick={onCreateClick}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
      onPageChange={onPageChange}
    />
  )
}
