import React from "react"
import { usePagination, DOTS } from "../services/pagination"
import Lang from "../services/lang"
//
export default function HomePagination({
  totalCount,
  currentPage,
  pageSize = 10,
  onPageChange,
  siblingCount = 1
}) {
  //
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  })
  //
  if (currentPage === -1 || paginationRange.length < 2) {
    return null
  }
  //
  const onNext = () => {
    onPageChange(currentPage + 1)
  }
  //
  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }
  //
  const lastPage = paginationRange[paginationRange.length - 1]
  //
  return (
    <div className="btn-group my-8 justify-center">
      <button className="btn" disabled={currentPage === 0} onClick={onPrevious}>
        {Lang.previous}
      </button>
      {paginationRange.map((pageNumber, index) => {
        //
        if (pageNumber === DOTS) {
          return (
            <button key={index} className="btn" disabled>
              ...
            </button>
          )
        }
        //
        return (
          <button
            className={
              "btn px-4" + (pageNumber === currentPage ? " btn-active" : "")
            }
            key={index}
            onClick={() => onPageChange(pageNumber)}
            disabled={pageNumber === currentPage}
          >
            {pageNumber}
          </button>
        )
      })}
      <button
        className="btn"
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        {Lang.next}
      </button>
    </div>
  )
}
