import React from "react"
import Lang from "../services/lang"
import HomePagination from "../components/homePagination"

//

export default function FranchiseView({
  franchiseData,
  onFranchisePageChange
}) {
  return (
    <div>
      {/* banner */}
      {/**/}
      <h1 className="text-center text-4xl font-bold my-20">
        {Lang.franchisesIntro}
      </h1>
      {/**/}
      <div className="flex flex-row my-4">
        <div className="h-12 flex items-center">
          <span className="text-sm leading-8">{Lang.total}</span> <span className="font-bold mx-1 text-sm leading-8">{franchiseData.info?.count}</span><span className="text-sm leading-8">{Lang.articles}</span>
        </div>
      </div>
      {/**/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        {franchiseData.data.map((item, index) => (
          <div key={index} className="card bordered card-shadow">
            <div className="relative">
              <figure className="">
                <img
                  className="m-auto w-auto"
                  src={item.thumbnail_url}
                  alt="thumbnail"
                />
              </figure>
              <ul className="glass opacity-0 hover:opacity-100 transition duration-500 absolute inset-0 w-full h-full flex flex-col justify-center items-center text-lg font-bold text-white">
                <li className="leading-relaxed">
                  <span>{`${Lang.storeCount}: ${item.store_count}개`}</span>
                </li>
                <li className="leading-relaxed">
                  <span>{`${Lang.monthlySales}: ${item.monthly_sales}만`}</span>
                </li>
                <li className="leading-relaxed">
                  <span>{`${Lang.startingCost}: ${item.starting_cost}만`}</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      {franchiseData.info?.count === 0 && (
        <div>
          <h2 className="text-xl text-center">{Lang.noDataAvailable}</h2>
        </div>
      )}
      {/**/}
      {franchiseData && (
        <HomePagination
          totalCount={franchiseData.info?.count}
          currentPage={franchiseData.info?.page}
          onPageChange={onFranchisePageChange}
        />
      )}
    </div>
  )
}
