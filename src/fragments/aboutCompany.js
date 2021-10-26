import React from "react"
import Lang from "../services/lang"
import HomePagination from "../components/homePagination"

//

export default function AboutCompany({
  aboutCompanyData,
  onAboutCompanyPageChange
}) {
  return (
    <div>
      {/* banner */}
      {/**/}
      <h1 className="text-center text-4xl font-bold my-20">
        {Lang.about}
      </h1>
      {aboutCompanyData && (
        <HomePagination
          totalCount={aboutCompanyData.info?.count}
          currentPage={aboutCompanyData.info?.page}
          onPageChange={onAboutCompanyPageChange}
        />
      )}
    </div>
  )
}
