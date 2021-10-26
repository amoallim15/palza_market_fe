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
      <div className="container mx-auto px-4 pt-9 pb-4 flex-grow">
        <h1 className="text-center text-4xl font-bold">{Lang.signIn}</h1>
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-lg">
          <div className="mb-4 px-10 pb-10 pt-5 card bg-base-200">
            {/* hw-add need check */}
            <ul className="text-center text-center">
              <li className="text-lg rounded-sm">  
                <button className="leading-loose w-full"><i className="xi-kakaotalk mr-2"></i>카카오톡 로그인</button>
              </li>
              <li className="text-lg rounded-sm">  
                <button className="leading-loose w-full"><i className="xi-naver mr-2 text-white"></i>네이버 로그인</button>
              </li>
              <li className="text-lg rounded-sm">  
                <button className="leading-loose w-full"><i className="xi-google-plus mr-2"></i>구글 로그인</button>
              </li>
            </ul>
            <div className="flex">
              <hr className="my-7 border-gray-300 w-5/12"></hr>
              <p className="my-4 w-2/12 text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;또는</p>
              <hr className="my-7 border-gray-300 w-5/12"></hr>
            </div>
            {/*  */}
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="form-control flex-grow">
                  <label className="label">
                    <span className="label-text">{Lang.username}</span>
                  </label>
                  <input
                    type="text"
                    className="input input-ghost w-full"
                    {...methods.register("username", { required: true })}
                  />
                </div>
                <div className="form-control flex-grow">
                  <label className="label">
                    <span className="label-text">{Lang.password}</span>
                  </label>
                  <input
                    type="password"
                    className="input input-ghost w-full"
                    {...methods.register("password", { required: true })}
                  />
                </div>
                {/* hw-add need check*/}
                <div className="flex justify-between">
                  <div>
                    <input id="save-id" type="checkbox" />
                    <label for="save-id" className="ml-2">{Lang.userIdSave}</label>
                  </div>
                  <ul className="flex">
                    <li>
                      <a classNAme=""
                    </li>
                  </ul>
                </div>
                {/*  */}
                <div className="mt-8 flex flex-col gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary w-full text-center"
                  >
                    <span className="inline-block mr-2">{Lang.signIn}</span>
                  </button>
                  {/* hw-add need check , do click change singUpPage*/}
                  <button
                    type="submit"
                    className="btn btn-primary w-full text-center"
                  >
                    <span className="inline-block mr-2">{Lang.signUp}</span>
                  </button>
                  {/*  */}
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </>
  )
}
