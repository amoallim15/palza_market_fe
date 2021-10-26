import React from "react"
import Lang from "../services/lang"
import HomePagination from "../components/homePagination"

//

export default function AdvertisingInquiry({
  advertisingInquiry,
  onAdvertisingInquiryPageChange
}) {
  return (
    <div>
      {/* banner */}
      {/**/}
      <h1 className="text-center text-4xl font-bold my-20">
        {Lang.about}
      </h1>
      {advertisingInquiry && (
        <HomePagination
          totalCount={advertisingInquiry.info?.count}
          currentPage={advertisingInquiry.info?.page}
          onPageChange={onAdvertisingInquiryPageChange}
        />
      )}
    </div>
  )
}