import React, { useState } from "react"


const HubPage2 = () => {
  return (
    <>
      <div class="my-12">
        <ul class="grid grid-cols-2 lg:grid-cols-3 gap-16">
          <li className="h-60 bg-gray-300">
            {/*img size h-60 w-full  */}
            <img />
            <div className="">
              <p className="text-md font-bold">제목</p>
              <p className="text-sm text-gray-500">
                <span>출처</span> &#8226; <span>날짜</span>
              </p>
            </div>
          </li>
          <li className="h-60 bg-gray-300"></li>
          <li className="h-60 bg-gray-300"></li>
        </ul>
      </div>
    </>
  )
}

export default HubPage2
