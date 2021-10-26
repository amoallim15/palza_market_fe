import React from "react"
import Lang from "../services/lang"
//
export default function PurchaseRequestView() {
  return (
    <div>
      <div className="my-4 p-10 card bg-gray-100">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 mt-6">매수/매도 의뢰</h2>
          <h4>의뢰하고 싶은 내용을 적어보세요!</h4>
          <p className="mb-6">담당자가 확인 후 고객님의 연락처로 연락드립니다.</p>
        </div>
        {/**/}
        <div className="form-control flex-grow">
          <label className="label">
            {/* <span className="label-text">{Lang.title}</span> */}
          </label>
          <input
            type="text"
            placeholder={Lang.title}
            className="input input-bordered w-full"
          />
        </div>
        {/**/}
        <div className="form-control">
          <label className="label">
            {/* <span className="label-text">{Lang.content}</span> */}
          </label>
          <textarea
            placeholder={Lang.content}
            className="textarea input-bordered h-40"
          />
        </div>
        {/**/}
        <div className="mt-8 grid lg:grid-cols-4 lg:gap-10">
          <div>
            <span className="text-lg font-semibold">{Lang.purchaseType}</span>
            <div className="flex my-2 justify-start">
              <label
                htmlFor="sale"
                className="cursor-pointer label justify-start mr-4"
              >
                <input
                  id="sale"
                  type="radio"
                  name="opt"
                  className="radio"
                  value="a"
                />
                <span className="label-text ml-2">{Lang.sale}</span>
              </label>
              {/**/}
              <label
                htmlFor="buy"
                className="cursor-pointer label justify-start mr-4"
              >
                <input
                  id="buy"
                  type="radio"
                  name="opt"
                  className="radio"
                  value="b"
                />
                <span className="label-text ml-2">{Lang.buy}</span>
              </label>
            </div>
          </div>
          {/* hw-add need check */}
          <div>
            <label className="label">
              <span className="text-lg font-semibold">본인 연락처</span>
            </label>
            <input type="tel" max='10' placeholder="000-0000-0000" className="w-full outline-none bg-transparent border-b-2"></input>
          </div>
          <div>
            <label className="label">
              <span className="text-lg font-semibold">고객명</span>
            </label>
            <input type="text" placeholder="ex) 홍길동" className="w-full outline-none bg-transparent border-b-2"></input>
          </div>
          <div className="lg:text-right my-auto">
            <button className="w-full mt-4 lg:mt-0 border p-4 rounded-md hover:bg-blue-400 hover:text-white">{Lang.send}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
