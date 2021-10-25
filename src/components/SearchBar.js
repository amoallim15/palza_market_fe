import React from "react";

function SearchBar({ placeholder, data }) {
  return (
    <div class="filter drop-shadow-xl w-10/12 mx-auto lg:absolute lg:left-40 lg:text-3xl lg:w-9/12 lg:-bottom-12 m-3 bg-white rounded-md">
      <div>
        <ul class="grid grid-cols-2 gap-1">
          <li class="border-r-1">
            <div class="flex py-5 lg:p-10 text-center justify-around lg:justify-between border-r-2 border-gray-200">
              <i class="xi-search point-color-font lg:text-base"></i>
              <input
                class="text-xs w-9/12 lg:text-base outline-none"
                type="text"
                placeholder="원하시는 키워드를 입력하세요."
              />
            </div>
          </li>
          <li class="flex justify-between">
            <div class="flex py-5 lg:py-10 lg:pl-6 text-center w-8/12 justify-around lg:justify-between relative">
              <i class="xi-filter point-color-font lg:text-base"></i>
              <select
                class="text-xs lg:text-base appearance-none w-4/6 outline-none"
                name=""
                id=""
              >
                <option value="" disabled="" selected="">
                  업종 카테고리
                </option>
                <option value="">휴게음식점</option>
                <option value="">일반음식점</option>
                <option value="">주류점</option>
                <option value="">오락/스포츠</option>
                <option value="">판매업</option>
                <option value="">서비스업</option>
                <option value="">기타업종</option>
              </select>
              <i class="xi-caret-down-min absolute top-50 right-0 lg:right-5 lg:text-base point-color-font"></i>
            </div>
            <button
              class="bg-black text-white text-xs btn lg:text-base px-3 m-2 lg:m-6 lg:px-5"
              type="submit"
            >
              검색
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
