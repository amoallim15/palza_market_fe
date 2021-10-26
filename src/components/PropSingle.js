import React from "react"
import PropImg from "../assets/imgs/PropSingle.jpg"
import Countdown from "../components/Countdown"

function PropSingle() {
  return (
    <div class="md:grid md:grid-cols-2 md:gap-4">
      <div class="m-4 lg:m-0 list-shadow rounded-md">
        <a href="#" class="block">
          <img class="w-full rounded-t-md inline-block" src={PropImg} alt="" />
          <ul class="list">
            <li class="p-4">
              <p>
                <span>제과점 </span>근린상가<span>ㆍ</span>
                <span>1층</span>
              </p>
              <p>월세 7,000/ 300</p>
              <p>권리금 8,000</p>
              <p>25평, 관리비 5만원</p>
              <p>합정역,도보 10분(합정동)</p>
              <p>
                <span>매물번호:55-9618 </span>
                <span>권리금 협상가능</span>
              </p>
            </li>
          </ul>
          <div class="bg-black text-white rounded-b-md text-4xl text-center leading-relaxed">
            21:30:21<span class="text-2xl font-thin">남음</span>
          </div>
        </a>
      </div>
      <div class="m-4 lg:m-0 list-shadow rounded-md">
        <a href="#" class="block">
          <img class="w-full rounded-t-md inline-block" src={PropImg} alt="" />
          <ul class="list">
            <li class="p-4">
              <p>
                <span>제과점 </span>근린상가<span>ㆍ</span>
                <span>1층</span>
              </p>
              <p>월세 7,000/ 300</p>
              <p>권리금 8,000</p>
              <p>25평, 관리비 5만원</p>
              <p>합정역,도보 10분(합정동)</p>
              <p>
                <span>매물번호:55-9618 </span>
                <span>권리금 협상가능</span>
              </p>
            </li>
          </ul>
          {/* countdown */}
          <div className="bg-black text-white rounded-b-md text-4xl text-center leading-relaxed">
            <Countdown />
          </div>
        </a>
      </div>
    </div>
  )
}

export default PropSingle
