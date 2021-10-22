import React from "react"
import { getReviews, deleteReview } from "../../services/api"
import MyReviewView from "../../views/dashboard/myReviewView"
import { useHistory } from "react-router-dom"
import { useCookies } from "react-cookie"
//
export default function MyReview() {
  const [loaded, setLoaded] = React.useState(false)
  const history = useHistory()
  const [cookies] = useCookies()
  const [reviewData, setReviewData] = React.useState({
    page: 0,
    count: 0,
    data: []
  })
  //
  React.useEffect(() => {
    ;(async () => {
      let result = await getReviews(0)
      if (result) await setReviewData(result)
      //
      await setLoaded(true)
    })()
  }, [])
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
    <MyReviewView
      reviewData={reviewData}
      onCreateClick={onCreateClick}
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
      onPageChange={onPageChange}
    />
  )
}
