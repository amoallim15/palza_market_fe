import React from "react"
import Lang from "../services/lang"
import HomePagination from "../components/homePagination"
//
export default function MagazineView({
  magazineData,
  onMagazinePageChange,
  onMagazineViewClick
}) {
  return (
    <div>
      {/**/}
      <div className="flex flex-row my-4">
        <div className="h-12 flex items-center">
          <span className="text-sm leading-8">{`${Lang.total} ${magazineData.info?.count} ${Lang.articles}`}</span>
        </div>
      </div>
      {/**/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        {magazineData.data.map((item, index) => (
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
                  {item.magazine_type}
                </div>
              </h2>
              <p className="text-sm">{item.updated_at}</p>
              <div className="justify-end card-actions">
                <button
                  htmlFor={`${item.id}`}
                  className="btn btn-primary modal-button"
                  onClick={(e) => onMagazineViewClick(e, item)}
                >
                  {Lang.more}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {magazineData.count === 0 && (
        <div>
          <h2 className="text-xl text-center">{Lang.noDataAvailable}</h2>
        </div>
      )}
      {/**/}
      {magazineData && (
        <HomePagination
          totalCount={magazineData.info?.count}
          currentPage={magazineData.info?.page}
          onPageChange={onMagazinePageChange}
        />
      )}
    </div>
  )
}
