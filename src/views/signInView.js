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
        <h1 className="text-center text-4xl font-bold mb-8">{Lang.signIn}</h1>
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-lg">
          <div className="my-4 p-10 card bg-base-200">
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
                <div className="mt-8 flex flex-row-reverse">
                  <button
                    type="submit"
                    className="btn btn-primary w-full text-center"
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
