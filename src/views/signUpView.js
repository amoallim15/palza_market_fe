import React from "react"
import HomeAppBar from "../components/homeAppBar"
import Lang from "../services/lang"
import IndividualIMG from "../assets/imgs/individual.png"
import AgencyIMG from "../assets/imgs/agency.png"
import { FormProvider } from "react-hook-form"
import AuthAgencyInfo from "../components/authAgencyInfo"
//
function Step1({ onUpdateUserType }) {
  return (
    <div className="grid grid-cols-2 gap-14">
      <button onClick={(e) => onUpdateUserType(e, "INDIVIDUAL", 2)}>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200 h-full p-10 text-center">
          <div>
            <img
              src={IndividualIMG}
              alt="individual"
              className="mb-6 block ml-auto mr-auto"
            />
            <h4>{Lang.signUpIndividual}</h4>
          </div>
        </div>
      </button>
      {/**/}
      <button onClick={(e) => onUpdateUserType(e, "AGENCY", 2)}>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200 h-full p-10 text-center">
          <div>
            <img
              src={AgencyIMG}
              alt="agency"
              className="mb-6 block ml-auto mr-auto"
            />
            <h4>{Lang.signUpAgency}</h4>
          </div>
        </div>
      </button>
    </div>
  )
}
//
function Step2({
  formUserType,
  methods,
  onSubmit,
  onBusinessLicenseChange,
  onbrokerageRegistrationChange
}) {
  return (
    <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {formUserType === "AGENCY" && <AuthAgencyInfo />}
          <div className="px-5 py-7 border-b">
            {/**/}
            {formUserType === "AGENCY" && (
              <>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  {Lang.managerPhoneNo}
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
              {Lang.username}
            </label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              {...methods.register("username", { required: true })}
            />
            {/**/}
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              {Lang.email}
            </label>
            <input
              type="email"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              {...methods.register("email", { required: true })}
            />
            {/**/}
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              {Lang.name}
            </label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              {...methods.register("name", { required: true })}
            />
            {/**/}
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              {Lang.phoneNo}
            </label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              {...methods.register("phone_no", { required: true })}
            />
            {/**/}
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              {Lang.password}
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
              {Lang.confirmPassword}
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
          {formUserType === "AGENCY" && (
            <div className="p-5 py-7 border-b">
              {/**/}
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                {Lang.businessRegistrationNo}
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
                {Lang.businessLicense}
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
                {Lang.brokerageRegistrationCard}
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
                <span className="ml-2 text-red-700">[{Lang.must}]</span>
                <span className="ml-2 text-gray-700">
                  {Lang.termsAndConditions}
                </span>
                <div className="flex-grow" />
                <button>{Lang.viewTermsAndConditions}</button>
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
                <span className="ml-2 text-red-700">[{Lang.must}]</span>
                <span className="ml-2 text-gray-700">{Lang.consent}</span>
                <div className="flex-grow" />
                <button>{Lang.viewTermsAndConditions}</button>
              </label>
            </div>
          </div>
          <div className="p-5">
            <button
              type="submit"
              className="mb-5 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              {Lang.signUp}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
//
export default function SignUpView({
  isAuth,
  userRole,
  userType,
  settings,
  methods,
  onSubmit,
  onBusinessLicenseChange,
  onbrokerageRegistrationChange,
  onUpdateUserType,
  step,
  formUserType
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
          {step === 1 && <Step1 onUpdateUserType={onUpdateUserType} />}
          {step === 2 && (
            <Step2
              formUserType={formUserType}
              methods={methods}
              onSubmit={onSubmit}
              onBusinessLicenseChange={onBusinessLicenseChange}
              onbrokerageRegistrationChange={onbrokerageRegistrationChange}
            />
          )}
        </div>
      </div>
    </>
  )
}
