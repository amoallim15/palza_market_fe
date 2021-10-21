import React, {useState} from "react";
import topBannerSlideOne from "../assets/imgs/topban1.png";
import topBannerSlideTwo from "../assets/imgs/topban2.jpg";
import mainBanenrOne from "../assets/imgs/main1.jpg";




const HubPage1 = () => {
  return (
    <>
       <div className="my-12">
        <div className="bg-black h-96 w-full">
           {/*img size h-96 w-full  */}
          <img /> 
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
          <li className="h-80 bg-gray-300">
            <div className="text-center text-white text-2xl">
              <p>가맹점 수(number of affiliated stores)</p>
              <p>월 매출(monthly sales)</p>
              <p>총 창업비용(Total Startup Cost)</p>
            </div>
          </li>
          <li className="h-80 bg-gray-300"></li>
          <li className="h-80 bg-gray-300"></li>
        </ul>
      </div>   
    </>
  );
};

export default HubPage1;
