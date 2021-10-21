import React, { useState } from "react";
import test1 from "../assets/imgs/test1.jpeg";
import test2 from "../assets/imgs/test2.jpeg";
import test3 from "../assets/imgs/test3.jpeg";

const HubPage1 = () => {
  return (
    <>
      <div className="my-12">
        <div className="bg-black">
          {/*img size h-96 w-full  */}
          <img className="h-96 w-full" src={test3} />
        </div>
        <div className="flex gap-4 mt-2 justify-end">
          <button>
            <i className="xi-long-arrow-left" />
          </button>
          <span>1/3</span>
          <button>
            <i className="xi-long-arrow-right" />
          </button>
        </div>
      </div>

      <div class="my-20">
        <h2 class="font-bold text-4xl my-24 text-center">
          프랜차이즈 창업 안내
        </h2>
        <ul class="grid grid-cols-2 lg:grid-cols-3 gap-5">
          <li class="">
            <div class="relative transform cursor-pointer">
              <div class="face front">
                <img src={test1} class="inline-block w-full h-auto" alt="" />
              </div>
            </div>
          </li>
          <li class="">
            <div class="relative transform cursor-pointer">
              <div class="face front">
                <img src={test1} class="inline-block w-full h-auto" alt="" />
              </div>
            </div>
          </li>
          <li class="">
            <div class="relative transform cursor-pointer">
              <div class="face front">
                <img src={test1} class="inline-block w-full h-auto" alt="" />
              </div>
            </div>
          </li>
          <li class="">
            <div class="relative transform cursor-pointer">
              <div class="face front">
                <img src={test1} class="inline-block w-full h-auto" alt="" />
              </div>
            </div>
          </li>
          <li class="">
            <div class="relative transform cursor-pointer">
              <div class="face front">
                <img src={test1} class="inline-block w-full h-auto" alt="" />
              </div>
            </div>
          </li>
          <li class="">
            <div class="relative transform cursor-pointer">
              <div class="face front">
                <img src={test1} class="inline-block w-full h-auto" alt="" />
              </div>
            </div>
          </li>
          <li class="">
            <div class="relative transform cursor-pointer">
              <div class="face front">
                <img src={test1} class="inline-block w-full h-auto" alt="" />
              </div>
            </div>
          </li>
          <li class="">
            <div class="relative transform cursor-pointer">
              <div class="face front">
                <img src={test1} class="inline-block w-full h-auto" alt="" />
              </div>
            </div>
          </li>
          <li class="">
            <div class="relative transform cursor-pointer">
              <div class="face front">
                <img src={test1} class="inline-block w-full h-auto" alt="" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HubPage1;

//리스트 a태그 누룰 시페이지 이동  그럼 페이지 이동에 Link를 달아서 상세페이지로 이동하게 만들고 상세페이지 components를 만들어서 api로 연동 hub 페이지 모두
