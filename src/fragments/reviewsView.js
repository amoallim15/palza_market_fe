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
          <span className="text-sm leading-8">{Lang.total}</span> <span className="font-bold mx-1 text-sm leading-8">{reviewData.info?.count}</span><span className="text-sm leading-8">{Lang.articles}</span>
        </div>
        <label htmlFor="create-review" className="text-center border my-auto p-2 rounded-md modal-button hover:bg-blue-400 hover:text-white">
          {Lang.create}
        </label>
        <input type="checkbox" id="create-review" className="modal-toggle" />
        {/**/}
        <div className="modal overflow-x-auto flex-col justify-start m-0 px-8 w-screen h-screen">
          <div className="modal-box my-10 bg-gray-100 lg:max-w-3xl rounded-b-2xl">
            {/**/}
            <span className="label label-text mr-4">{Lang.purchaseType}</span>
            <div className="form-control flex-row justify-around lg:justify-start">
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
                <span className="label-text ml-2">{Lang.saleReview}</span>
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
                <span className="label-text ml-2">{Lang.buyReview}</span>
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
                className="input input-bordered w-full"
              />
            </div>
            {/**/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">{Lang.content}</span>
              </label>
              <textarea
                placeholder="최소 100자 이상으로 입력해주세요!"
                className="textarea input-bordered h-24"
              />
            </div>
            {/**/}
            {/* hw-add need check */}
            <div className="mt-8 grid lg:grid-cols-4 gap-8">
              <div>
                <label className="label">
                  <span className="label-text">계약일</span>
                </label>
                <input type="date" className="w-full outline-none bg-transparent border-b-2"></input>
              </div>
              <div>
                <label className="label">
                  <span className="label-text">담당 에이전트</span>
                </label>
                <input type="text" className="w-full outline-none bg-transparent border-b-2"></input>
              </div>
              <div>
                <label className="label">
                  <span className="label-text">고객명</span>
                </label>
                <input type="text" className="w-full outline-none bg-transparent border-b-2"></input>
              </div>
              <label htmlFor="create-review" className="text-center border my-auto py-4 rounded-md hover:bg-blue-400 hover:text-white">
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
