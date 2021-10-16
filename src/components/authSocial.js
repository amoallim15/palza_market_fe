import React from "react"
import AppContext from "../services/context"
import PopUp from "./popup"
import EN from "../services/lang"
import {
  KAKAO_AUTH_URL,
  NAVER_AUTH_URL,
  GOOGLE_AUTH_URL
} from "../services/config"

export default function AuthSocial() {
  const { appState } = React.useContext(AppContext)
  //
  const onSocialPopupEvent = async (e, res, err) => {
    if (e === "OPENED") {
      switch (res.name) {
        case "kakao_auth":
          window.open(KAKAO_AUTH_URL(appState.appSettings.kakao_key), res.name)
          break
        case "naver_auth":
          window.open(NAVER_AUTH_URL(appState.appSettings.naver_key), res.name)
          break
        case "google_auth":
          window.open(
            GOOGLE_AUTH_URL(appState.appSettings.google_key),
            res.name
          )
          break
        default:
          return
      }
    } else if (e === "SUCCESS") {
      // TODO:
      // implementation.
    }
  }
  //
  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-1">
        <PopUp
          type="button"
          className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
          url="about:blank"
          name="kakao_auth"
          onEvent={onSocialPopupEvent}
        >
          {EN.kakao}
        </PopUp>
        <PopUp
          type="button"
          className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
          url="about:blank"
          name="google_auth"
          onEvent={onSocialPopupEvent}
        >
          {EN.google}
        </PopUp>
        <PopUp
          type="button"
          className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
          url="about:blank"
          name="naver_auth"
          onEvent={onSocialPopupEvent}
        >
          {EN.naver}
        </PopUp>
      </div>
    </div>
  )
}
