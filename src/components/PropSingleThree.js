import React from "react"
import PropImg from "../assets/imgs/PropSingle.jpg"

function PropSingleThree() {
  return (
    <a href="#">
      <div className="mainCard">
        <div class="card bordered filter drop-shadow-md">
          <figure>
            <img src={PropImg} alt="" />
          </figure>
          <div class="bg-white">
            <ul>
              <li className="p-5 list-none">
                <p>
                  <span class="badge mr-2 badge-secondary">제과점</span>
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
            <div className="bg-black text-white text-4xl text-center leading-relaxed">
              <p className="font-mono text-3xl py-2"><span>2021</span>-<span>09</span>-<span>30</span><span className="text-2xl font-light">&nbsp;폐업완료</span></p>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
export default PropSingleThree
