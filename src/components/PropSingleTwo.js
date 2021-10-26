import React from "react"
import PropImg from "../assets/imgs/PropSingle.jpg"
import Countdown from "../components/Countdown"

function PropSingleTwo() {
  return (
    <a href="#">
      <div className="mainCard filter drop-shadow-md">
        <div class="card bordered">
          <figure>
            <img src={PropImg} alt="" />
          </figure>
          <div class="">
            <ul className="bg-white">
              <li className="p-5 list-none">
                <p>
                  <span class="badge badge-secondary mr-2">제과점</span>
                  <span className="propertyType">근린상가</span>
                  <span>ㆍ</span>
                  <span className="floor">1층</span>
                </p>
                <p class="text-2xl font-semibold pb-2">
                  <span>월세</span>
                  <span>7,000</span>/<span>300</span>
                </p>
                <p className="text-lg">권리금 8,000</p>
                <p className="text-sm font-medium">25평, 관리비 5만원</p>
                <p className="text-sm font-medium">합정역,도보 10분(합정동)</p>
                <p className="pt-2">
                  <span className="text-sm border-solid border-2 border-light-blue-500 mr-2 p-1 rounded-lg">
                    매물번호:55-9618{" "}
                  </span>
                  <span className="text-sm border-solid border-2 border-light-blue-500 p-1 rounded-lg">
                    권리금 협상가능
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </a>
  )
}

export default PropSingleTwo
