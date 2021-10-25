import React from "react"
import Lang from "../services/lang"

export default function Footer({ footerData }) {
  //
  return (
    <footer>
      <div className="container mx-auto mt-10 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/**/}
          <div className="py-4 md:pr-4 flex flex-col">
            <h3 className="mb-3 text-xl font-semibold">{Lang.notices}</h3>
            <div className="mb-3">
              {/**/}
              <p className="flex justify-between mb-4">
                <span className="text-sm">팔자마켓 사이트 리뉴얼 안내</span>
                <span className="text-sm text-right">2021. 09. 14</span>
              </p>
              {/**/}
            </div>
          </div>
          <div className="md:border-l md:border-r py-4 md:px-4 flex flex-col">
            <h3 className="mb-3 text-xl font-semibold">
              {Lang.customerRelation}
            </h3>
            {/**/}
            <div className="mb-3 ">
              <p className="text-3xl font-bold mb-2">1588-0000</p>
              <p>평일 오전 9시 ~오후6시(점심시간 12시~1시)</p>
              <p>주말 및 공휴일 휴무</p>
              <p>이메일: palazamarket@palza.kr</p>
            </div>
          </div>
          <div className="py-4 md:pl-4 flex flex-col">
            <h3 className="mb-3 text-xl font-semibold">{Lang.serviceGuide}</h3>
            {/**/}
            <div className="grid grid-cols-3 mb-3 gap-2 md:grid-cols-2">
              <button className="btn h-auto">개인정보취급방침</button>
              <button className="btn h-auto">허위매물 신고</button>
              <button className="btn h-auto">위치기반 이용약관</button>
              <button className="btn h-auto">매수/매도 의뢰</button>
              <button className="btn h-auto">광고 문의</button>
              <button className="btn h-auto">중개사무소 가입안내</button>
            </div>
          </div>
          {/**/}
        </div>
      </div>
      <div className="flex py-6 justify-center bg-base-300">
        <div className="container mx-auto text-center">
          <span>
            개업공인중개사표시: 부동산중개법인 팔자마켓(주) 주소:서울시 서초구
            강남대로 617 대양빌딩 6층 (잠원동 12-17)
          </span>
          <span>
            대표자:김보석 010-1234-7890 등록번호:11650-2019-00264
            copyright(주)팔자마켓
          </span>
        </div>
      </div>
    </footer>
  )
}
