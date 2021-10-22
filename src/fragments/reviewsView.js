import React from "react"
import Lang from "../services/lang"
import HomePagination from "../components/homePagination"
//
export default function ReviewsView({
  reviewData,
  reviewTypeColors,
  onReviewPageChange
}) {
  //
  return (
    <div>
      {/**/}
      <div className="flex flex-row my-4 justify-between">
        <div className="h-12 flex items-center">
          <span className="text-sm leading-8">{`${Lang.total} ${reviewData.count} ${Lang.articles}`}</span>
        </div>
        <button className="btn btn-primary">{Lang.create}</button>
      </div>
      {/**/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        {reviewData.data.map((item, index) => (
          <div className="card lg:card-side bordered">
            <div className="card-body">
              <h3 className="badge">{item.review_type}</h3>
              <h2 className="card-title">{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      {/**/}
      {reviewData.count === 0 && (
        <div>
          <h2 className="text-xl text-center">{Lang.noDataAvailable}</h2>
        </div>
      )}
      {/**/}
      <HomePagination
        totalCount={reviewData.count}
        currentPage={reviewData.page}
        onPageChange={onReviewPageChange}
      />
      {/**/}
    </div>
  )
}
