import React from "react"
import HomeAppBar from "../components/homeAppBar"
import Lang from "../services/lang"
import { FormProvider } from "react-hook-form"
import Footer from "../components/footer"
import { Link } from "react-router-dom"

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
        <div className="px-10 pt-10 xs:p-0 mx-auto md:w-full md:max-w-lg">
          <div className="mb-4 px-10 pb-10 pt-5 card bg-gray-100">
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
                  {/* <label className="label">
                    <span className="label-text">{Lang.username}</span>
                  </label> */}
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder={Lang.userId}
                    {...methods.register("username", { required: true })}
                  />
                </div>
                <div className="mt-2 form-control flex-grow">
                  {/* <label className="label">
                    <span className="label-text">{Lang.password}</span>
                  </label> */}
                  <input
                    type="password"
                    className="input input-bordered w-full "
                    placeholder={Lang.password}
                    {...methods.register("password", { required: true })}
                  />
                </div>
                {/* hw-add need check*/}
                <div className="my-4 flex justify-between">
                  <div>
                    <input id="save-id" type="checkbox" className="checkbox align-middle"/>
                    <label for="save-id" className="ml-2 text-sm labal-text">{Lang.userIdSave}</label>
                  </div>
                  <ul className="flex text-xs mt-1 gap-2">
                    <li>
                    <div>
                      <label htmlFor="findID" className="block hover:font-bold">아이디 찾기</label> 
                      <input type="checkbox" id="findID" className="modal-toggle" /> 
                      <div className="modal">
                        <div className="modal-box">
                          <h2 className="font-bold text-3xl text-center mb-8">아이디 찾기</h2>
                          <div className="flex justify-around gap-2">
                            <input id="findName" type="text" className="text-lg outline-none border-b-2" placeholder={Lang.username}></input>
                            <input id="findEmail" type="text" className="text-lg outline-none border-b-2" placeholder={Lang.email}></input>
                          </div>
                          <div className="modal-action">
                            <label htmlFor="findID" className="btn btn-primary modal-button">이메일 보내기</label> 
                            <label htmlFor="findID" className="btn modal-button">{Lang.close}</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    </li>
                    <li>
                      |
                    </li>
                    <li>
                    <div>
                      <label htmlFor="findPassword" className="block hover:font-bold">비밀번호 찾기</label> 
                      <input type="checkbox" id="findPassword" className="modal-toggle" /> 
                      <div className="modal">
                        <div className="modal-box">
                        <h2 className="font-bold text-3xl text-center mb-8">비밀번호 찾기</h2>
                          <div className="flex justify-around gap-2">
                            <input id="findName" type="text" className="text-lg outline-none border-b-2" placeholder={Lang.userId}></input>
                            <input id="findEmail" type="text" className="text-lg outline-none border-b-2" placeholder={Lang.email}></input>
                          </div>
                          <div className="modal-action">
                            <label htmlFor="findPassword" className="btn btn-primary modal-button">이메일 보내기</label> 
                            <label htmlFor="findPassword" className="btn modal-button">{Lang.close}</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    </li>
                    <li>
                      
                    </li>
                  </ul>
                </div>
                {/*  */}
                <div className="mt-2 flex flex-col gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary w-full text-center"
                  >
                    <span className="inline-block mr-2">{Lang.signIn}</span>
                  </button>
                  {/* hw-add need check , do click change singUpPage*/}
                  <Link
                    to={"/sign-up"}
                    className={
                      "btn btn-primary w-full text-center"
                    }
                  >
                    {Lang.signUp}
                  </Link>
                  {/*  */}
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

