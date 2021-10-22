import React from "react"
import { getReviews, deleteReview } from "../../services/api"
import ReviewView from "../../views/dashboard/reviewView"
import { useHistory, useLocation } from "react-router-dom"
import { useCookies } from "react-cookie"
import AppContext from "../../services/context"
//
export default function Review() {
  const [loaded, setLoaded] = React.useState(false)
  const { appState } = React.useContext(AppContext)
  const history = useHistory()
  const [cookies] = useCookies()
  const location = useLocation()
  const [reviewData, setReviewData] = React.useState({
    page: 0,
    count: 0,
    data: []
  })
  const [isMy, setIsMy] = React.useState(
    !!location.pathname.includes("my-review")
  )
  //
  React.useEffect(() => {
    ;(async () => {
      const loc = !!location.pathname.includes("my-review")
      if (loc !== isMy) await setIsMy(loc)
      //
      if (
        !loc &&
        !["ADMIN", "EMPLOYEE"].includes(appState.currentUser.user_role)
      ) {
        history.replace("/dashboard/profile")
      }
      //
      let result = await getReviews(0)
      if (result) await setReviewData(result)
      //
      await setLoaded(true)
    })()
  }, [location.pathname, isMy, appState.currentUser.user_role, history])
  //
  const onCreateClick = (e) => {
    history.push("/dashboard/review/alter")
  }
  //
  const onEditClick = (e, item) => {
    history.push(`/dashboard/review/alter/${item.id}`)
  }
  //
  const onDeleteClick = async (e, item) => {
    const result = await deleteReview(item.id, cookies["token"])
    if (!result) return
    let result_2 = await getReviews(0)
    if (result_2) await setReviewData(result_2)
  }
  //
  const onPageChange = async (e, newPage) => {
    const result = await getReviews(newPage)
    if (result) await setReviewData(result)
  }
  //
  if (!loaded) return <div />
  return (
    <ReviewView
      reviewData={reviewData}
      onCreateClick={onCreateClick}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
      onPageChange={onPageChange}
      isMy={isMy}
    />
  )
}
