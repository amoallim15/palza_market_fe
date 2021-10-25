import React from "react"
import Lang from "../services/lang"
import HomePagination from "../components/homePagination"
//
export default function NoticesView({
  noticeData,
  onNoticePageChange,
  onNoticeSearchChange,
  onNoticeSearchClick
}) {
  //
  return (
    <div>
      {/**/}
      <div className="flex flex-row my-4 justify-between">
        <div className="h-12 flex items-center">
          <span className="text-sm leading-8">{Lang.total}</span> <span className="font-bold mx-1 text-sm leading-8">{noticeData.info?.count}</span><span className="text-sm leading-8">{Lang.articles}</span>
        </div>
        <div className="">
          <div className="relative">
            <input
              type="text"
              placeholder={"검색어를입력하세요"}
              className="w-full pr-6 border-b-2 focus:outline-none"
              onChange={onNoticeSearchChange}
            />
            <button
              className="absolute top-0 right-0 rounded-l-none"
              onClick={onNoticeSearchClick}
            >
              
              <i className="xi-search"></i>
            </button>
          </div>
        </div>
      </div>
      {/**/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        {noticeData.data.map((item, index) => (
          <div key={index} className="card bordered">
            <figure className="relative h-60 overflow-y-hidden">
              <img
                className="m-auto w-auto absolute inset-0"
                src={item.thumbnail_url}
                alt="thumbnail"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.title}
                <div className="badge mx-2 badge-secondary">
                  {item.category_id}
                </div>
              </h2>
              <p className="text-sm mb-4 ">{item.updated_at}</p>
              <p className="truncate">{item.content}</p>
              <div className="justify-end card-actions">
                <label
                  htmlFor={`${item.id}`}
                  className="btn btn-primary modal-button"
                >
                  {Lang.more}
                </label>
                <input
                  type="checkbox"
                  id={`${item.id}`}
                  className="modal-toggle"
                />
                <div className="modal overflow-x-auto flex-col justify-start m-0 px-4 w-screen h-screen">
                  <div className="modal-box my-10">
                    <figure>
                      <img
                        className="m-auto w-auto rounded-2xl"
                        src={item.thumbnail_url}
                        alt="thumbnail"
                      />
                    </figure>
                    <div className="py-8">
                      <h2 className="mb-3 text-xl font-semibold">
                        {item.title}
                        <div className="badge mx-2 badge-secondary">
                          {item.category_id}
                        </div>
                      </h2>
                      <p className="text-sm mb-4 ">{item.updated_at}</p>
                      <p>{item.content}</p>
                    </div>
                    <div className="modal-action">
                      <label htmlFor={`${item.id}`} className="btn btn-primary">
                        {Lang.close}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/**/}
            </div>
          </div>
        ))}
      </div>
      {/**/}
      {noticeData.count === 0 && (
        <div>
          <h2 className="text-xl text-center">{Lang.noDataAvailable}</h2>
        </div>
      )}
      {/**/}
      <HomePagination
        totalCount={noticeData.info?.count}
        currentPage={noticeData.info?.page}
        onPageChange={onNoticePageChange}
      />
    </div>
  )
}
