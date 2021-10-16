import React from "react"
import AuthLayout from "./authLayout"
import EN from "../../services/lang"
import AgencyIMG from "../../assets/imgs/agency.png"
import IndividualIMG from "../../assets/imgs/individual.png"
import { useForm, FormProvider } from "react-hook-form"
import VerifyUser from "../../components/verifyUser"
import { signUp, uploadImage } from "../../services/api"
import AuthAgencyInfo from "../../components/authAgencyInfo"
import { useHistory } from "react-router-dom"

export function SignUpStep1({ onUserTypeSelected }) {
  return (
    <div className="grid grid-cols-2 gap-14">
      <button onClick={(e) => onUserTypeSelected(e, "INDIVIDUAL", 1)}>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200 h-full p-10 text-center">
          <div>
            <img
              src={IndividualIMG}
              alt="individual"
              className="mb-6 block ml-auto mr-auto"
            />
            <h4>{EN.signUpIndividual}</h4>
          </div>
        </div>
      </button>
      {/**/}
      <button onClick={(e) => onUserTypeSelected(e, "AGENCY", 1)}>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200 h-full p-10 text-center">
          <div>
            <img
              src={AgencyIMG}
              alt="agency"
              className="mb-6 block ml-auto mr-auto"
            />
            <h4>{EN.signUpAgency}</h4>
          </div>
        </div>
      </button>
    </div>
  )
}
//
export function SignUpStep2({ onUserTypeSelected, userType }) {
  //
  const history = useHistory()
  const methods = useForm({
    criteriaMode: "all",
    mode: "onSubmit",
    defaultValues: {
      user_type: userType,
      // TODO: update based on sign-up method (Social)
      user_method: "EMAIL"
    }
  })
  const { setValue } = methods
  //
  React.useEffect(() => {
    setValue("name", "test")
    setValue("phone_no", "01091601590")
    setValue("verify_user", "test")
  }, [setValue])
  //
  const onSubmit = async (data) => {
    const result = await signUp(data)
    if (!result) return
    history.push("/sign-in")
  }
  //
  const onBusinessLicenseChange = async (e) => {
    if (!e.target.files[0]) {
      await methods.setValue("business_license_url", null, {
        shouldValidate: true
      })
      return
    }
    const result = await uploadImage(e.target.files[0])
    if (!result) return
    await methods.setValue("business_license_url", result.url, {
      shouldValidate: true
    })
  }
  //
  const onbrokerageRegistrationChange = async (e) => {
    if (!e.target.files[0]) {
      await methods.setValue("brokerage_card_url", null, {
        shouldValidate: true
      })
      return
    }
    const result = await uploadImage(e.target.files[0])
    if (!result) return
    await methods.setValue("brokerage_card_url", result.url, {
      shouldValidate: true
    })
  }
  //
  // console.log(methods.formState.errors)
  //
  return (
    <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {userType === "AGENCY" && <AuthAgencyInfo />}
          <div className="px-5 py-7 border-b">
            {/**/}
            {userType === "AGENCY" && (
              <>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  {EN.managerPhoneNo}
                </label>
                <input
                  type="text"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  {...methods.register("manager_phone_no")}
                />
              </>
            )}
            {/**/}
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              {EN.username}
            </label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              {...methods.register("username", { required: true })}
            />
            {/**/}
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              {EN.email}
            </label>
            <input
              type="email"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              {...methods.register("email", { required: true })}
            />
            {/**/}
            <VerifyUser disabled={true} />
            {/**/}
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              {EN.name}
            </label>
            <input
              disabled
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              {...methods.register("name", { required: true })}
            />
            {/**/}
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              {EN.phoneNo}
            </label>
            <input
              disabled
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              {...methods.register("phone_no", { required: true })}
            />
            {/**/}
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              {EN.password}
            </label>
            <input
              type="password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              {...methods.register("password", {
                required: true,
                pattern: /^((?=.*\d)(?=.*[a-z])(?=.*[\W]).{8,16})$/
              })}
            />
            {/**/}
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              {EN.confirmPassword}
            </label>
            <input
              type="password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              {...methods.register("confirm_password", {
                required: true,
                validate: {
                  unmatched: (v) => v === methods.getValues("password")
                }
              })}
            />
          </div>
          {userType === "AGENCY" && (
            <div className="p-5 py-7 border-b">
              {/**/}
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                {EN.businessRegistrationNo}
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                {...methods.register("business_registeration_no", {
                  required: true
                })}
              />
              {/**/}
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                {EN.businessLicense}
              </label>
              <input
                type="hidden"
                {...methods.register("business_license_url", {
                  required: true
                })}
              />
              <input
                type="file"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                onChange={onBusinessLicenseChange}
              />
              {/**/}
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                {EN.brokerageRegistrationCard}
              </label>
              <input
                type="hidden"
                {...methods.register("brokerage_card_url", { required: true })}
              />
              <input
                type="file"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                onChange={onbrokerageRegistrationChange}
              />
            </div>
          )}
          <div className="p-5 py-7 border-b">
            <div>
              <label className="font-semibold text-sm text-gray-600 pb-1 inline-flex items-center mt-1 mb-5 w-full">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5"
                  {...methods.register("terms_and_conditions", {
                    required: true
                  })}
                />
                <span className="ml-2 text-red-700">[{EN.must}]</span>
                <span className="ml-2 text-gray-700">
                  {EN.termsAndConditions}
                </span>
                <div className="flex-grow" />
                <button>{EN.viewTermsAndConditions}</button>
              </label>
            </div>
            {/**/}
            <div>
              <label className="font-semibold text-sm text-gray-600 pb-1 inline-flex items-center mt-1 mb-5 w-full">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5"
                  {...methods.register("personal_info_consent", {
                    required: true
                  })}
                />
                <span className="ml-2 text-red-700">[{EN.must}]</span>
                <span className="ml-2 text-gray-700">{EN.consent}</span>
                <div className="flex-grow" />
                <button>{EN.viewTermsAndConditions}</button>
              </label>
            </div>
          </div>
          <div className="p-5">
            <button
              type="submit"
              className="mb-5 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              {EN.signUp}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
//
export default function SignUp() {
  const [userType, setUserType] = React.useState("")
  const [step, setStep] = React.useState(0)
  //
  const updateUserType = (e, type, step) => {
    setUserType(type)
    setStep(step)
  }
  //
  return (
    <AuthLayout>
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-lg">
        {/**/}
        {step === 0 && <SignUpStep1 onUserTypeSelected={updateUserType} />}
        {step === 1 && (
          <SignUpStep2
            onUserTypeSelected={updateUserType}
            userType={userType}
          />
        )}
        {/**/}
      </div>
    </AuthLayout>
  )
}
