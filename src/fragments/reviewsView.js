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
        <label htmlFor="create-review" className="btn btn-primary modal-button">
          {Lang.create}
        </label>
        <input type="checkbox" id="create-review" className="modal-toggle" />
        {/**/}
        <div className="modal overflow-x-auto flex-col justify-start m-0 px-4 w-screen h-screen ">
          <div className="modal-box my-10 bg-base-200">
            {/**/}
            <div className="form-control flex-row">
              <span className="label label-text mr-4">{Lang.purchaseType}</span>
              <label
                htmlFor="sale"
                className="cursor-pointer label justify-start mr-4"
              >
                <input
                  id="sale"
                  type="radio"
                  name="opt"
                  className="radio"
                  value="a"
                />
                <span className="label-text ml-2">{Lang.sale}</span>
              </label>
              {/**/}
              <label
                htmlFor="buy"
                className="cursor-pointer label justify-start mr-4"
              >
                <input
                  id="buy"
                  type="radio"
                  name="opt"
                  className="radio"
                  value="b"
                />
                <span className="label-text ml-2">{Lang.buy}</span>
              </label>
            </div>
            {/**/}
            <div className="form-control flex-grow">
              <label className="label">
                <span className="label-text">{Lang.title}</span>
              </label>
              <input
                type="text"
                placeholder={Lang.title}
                className="input input-ghost w-full"
              />
            </div>
            {/**/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">{Lang.content}</span>
              </label>
              <textarea
                placeholder={Lang.content}
                className="textarea input-ghost h-24"
              />
            </div>
            {/**/}
            <div className="mt-8 flex flex-row-reverse">
              <label htmlFor="create-review" className="btn btn-primary">
                {Lang.send}
              </label>
            </div>
            {/**/}
          </div>
        </div>
        {/**/}
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
        totalCount={reviewData.info?.count}
        currentPage={reviewData.info?.page}
        onPageChange={onReviewPageChange}
      />
      {/**/}
    </div>
  )
}
