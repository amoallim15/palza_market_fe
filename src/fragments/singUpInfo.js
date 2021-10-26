import React from "react"
import Lang from "../services/lang"
import HomePagination from "../components/homePagination"

//

export default function SingUpInfo({
  singUpInfo,
  onSingUpInfoPageChange
}) {
  return (
    <div>
      {/* banner */}
      {/**/}
      <h1 className="text-center text-4xl font-bold my-20">
        {Lang.about}
      </h1>
      {singUpInfo && (
        <HomePagination
          totalCount={singUpInfo.info?.count}
          currentPage={singUpInfo.info?.page}
          onPageChange={onSingUpInfoPageChange}
        />
      )}
    </div>
  )
}