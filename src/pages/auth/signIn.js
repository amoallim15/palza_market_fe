import React from "react"
import AuthLayout from "./authLayout"
import AuthPaper from "../../components/authPaper"
import EN from "../../services/lang"

export default function SignIn() {
  return (
    <AuthLayout>
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-lg">
        <AuthPaper>
          <div className="px-5 py-7">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              {EN.email}
            </label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              {EN.password}
            </label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <button
              type="button"
              className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block mr-2">{EN.signIn}</span>
            </button>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-3 gap-1">
              <button
                type="button"
                className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
              >
                {EN.kakao}
              </button>
              <button
                type="button"
                className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
              >
                {EN.google}
              </button>
              <button
                type="button"
                className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
              >
                {EN.naver}
              </button>
            </div>
          </div>
        </AuthPaper>
      </div>
    </AuthLayout>
  )
}
