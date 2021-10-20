import React from "react"
import HomeAppBar from "../components/homeAppBar"
import Lang from "../services/lang"
import { FormProvider } from "react-hook-form"

export default function SignInView({
  isAuth,
  userRole,
  userType,
  onSubmit,
  methods
}) {
  //
  return (
    <>
      <HomeAppBar
        sticky={true}
        isAuth={isAuth}
        userRole={userRole}
        userType={userType}
      />
      <div className="flex-grow flex-shrink bg-gray-100 flex flex-col sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-lg">
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="px-5 py-7">
                  <label className="font-semibold text-sm text-gray-600 pb-1 block">
                    {Lang.username}
                  </label>
                  <input
                    type="text"
                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                    {...methods.register("username", { required: true })}
                  />
                  <label className="font-semibold text-sm text-gray-600 pb-1 block">
                    {Lang.password}
                  </label>
                  <input
                    type="password"
                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                    {...methods.register("password", { required: true })}
                  />
                  <button
                    type="submit"
                    className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                  >
                    <span className="inline-block mr-2">{Lang.signIn}</span>
                  </button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </>
  )
}
