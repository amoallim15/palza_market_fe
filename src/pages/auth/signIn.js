import React from "react"
import AuthLayout from "./authLayout"
import EN from "../../services/lang"
import { useForm, FormProvider } from "react-hook-form"
import { signIn } from "../../services/api"
import AuthSocial from "../../components/authSocial"
import { useHistory } from "react-router-dom"
import { useCookies } from "react-cookie"
//
export default function SignIn() {
  const history = useHistory()
  const [, setCookie] = useCookies(["token"])
  const methods = useForm({
    criteriaMode: "all",
    mode: "onSubmit",
    defaultValues: {}
  })
  //
  const onSubmit = async (data) => {
    const result = await signIn(data)
    if (!result) return
    await setCookie("token", result, {
      path: "/",
      maxAge: 86400 /* 1 day = (30 * 30 * 24) */
    })
    history.push("/")
  }
  //
  return (
    <AuthLayout>
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-lg">
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="px-5 py-7">
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  {EN.username}
                </label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  {...methods.register("username", { required: true })}
                />
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  {EN.password}
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
                  <span className="inline-block mr-2">{EN.signIn}</span>
                </button>
              </div>
            </form>
          </FormProvider>
          <AuthSocial />
        </div>
      </div>
    </AuthLayout>
  )
}
