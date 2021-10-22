import React from "react"
import { getSMSs } from "../../services/api"
import SMSView from "../../views/dashboard/SMSView"
import { useHistory } from "react-router-dom"
import { useCookies } from "react-cookie"
//
export default function SMS() {
  const [loaded, setLoaded] = React.useState(false)
  const history = useHistory()
  const [cookies] = useCookies()
  const [SMSData, setSMSData] = React.useState({
    page: 0,
    count: 0,
    data: []
  })
  //
  React.useEffect(() => {
    ;(async () => {
      let result = await getSMSs(0, cookies["token"])
      if (result) await setSMSData(result)
      //
      await setLoaded(true)
    })()
  }, [cookies])
  //
  const onCreateClick = (e) => {
    history.push("/dashboard/sms/alter")
  }
  //
  const onPageChange = async (e, newPage) => {
    const result = await getSMSs(newPage)
    if (result) await setSMSData(result)
  }
  //
  if (!loaded) return <div />
  return (
    <SMSView
      SMSData={SMSData}
      onCreateClick={onCreateClick}
      onPageChange={onPageChange}
    />
  )
}
