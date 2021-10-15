import React from "react"
import AuthLayout from "./authLayout"
import AuthPaper from "../../components/authPaper"
import EN from "../../services/lang"
import AgencyIMG from "../../assets/imgs/agency.png"
import IndividualIMG from "../../assets/imgs/individual.png"

export function SignUpStep1({ onUserTypeSelected }) {
  return (
    <div className="grid grid-cols-2 gap-14">
      <button onClick={(e) => onUserTypeSelected(e, "INDIVIDUAL", 1)}>
        <AuthPaper className="h-full p-10 text-center">
          <div>
            <img
              src={IndividualIMG}
              alt="individual"
              className="mb-6 block ml-auto mr-auto"
            />
            <h4>{EN.signUpIndividual}</h4>
          </div>
        </AuthPaper>
      </button>
      {/**/}
      <button onClick={(e) => onUserTypeSelected(e, "AGENCY", 1)}>
        <AuthPaper className="h-full p-10 text-center">
          <div>
            <img
              src={AgencyIMG}
              alt="agency"
              className="mb-6 block ml-auto mr-auto"
            />
            <h4>{EN.signUpAgency}</h4>
          </div>
        </AuthPaper>
      </button>
    </div>
  )
}
//
export function SignUpStep2({ onUserTypeSelected, userType }) {
  return (
    <AuthPaper>
      <div className="px-5 py-7">
        {/**/}
        {userType === "AGENCY" && (
          <>
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              {EN.managerPhoneNo}
            </label>
            <input
              name="manager_phone_no"
              type="email"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
          </>
        )}
        {/**/}
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          {EN.username}
        </label>
        <input
          name="username"
          type="email"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        />
        {/**/}
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          {EN.email}
        </label>
        <input
          name="email"
          type="text"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        />
        {/**/}
        <button
          type="button"
          className="mb-5 transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
        >
          {EN.verifyUser}
        </button>
        {/**/}
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          {EN.name}
        </label>
        <input
          name="name"
          disabled
          type="text"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        />
        {/**/}
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          {EN.phoneNo}
        </label>
        <input
          name="phone_no"
          disabled
          type="text"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        />
        {/**/}
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          {EN.password}
        </label>
        <input
          name="password"
          type="password"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        />
        {/**/}
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          {EN.confirmPassword}
        </label>
        <input
          name="confirm_password"
          type="password"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
        />
      </div>
      {userType === "AGENCY" && (
        <div className="p-5">
          {/**/}
          <label className="font-semibold text-sm text-gray-600 pb-1 block">
            {EN.businessRegistrationNo}
          </label>
          <input
            name="business_registeration_no"
            type="text"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
          {/**/}
          <label className="font-semibold text-sm text-gray-600 pb-1 block">
            {EN.businessLicense}
          </label>
          <input
            name="business_license"
            type="file"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
          {/**/}
          <label className="font-semibold text-sm text-gray-600 pb-1 block">
            {EN.brokerageRegistrationCard}
          </label>
          <input
            name="business_brokerage_card"
            type="file"
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
          />
        </div>
      )}
      <div className="p-5">
        <div>
          <label className="font-semibold text-sm text-gray-600 pb-1 inline-flex items-center mt-1 mb-5 w-full">
            <input
              name="terms_and_conditions"
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2 text-red-700">[{EN.must}]</span>
            <span className="ml-2 text-gray-700">{EN.termsAndConditions}</span>
            <div className="flex-grow" />
            <button>{EN.viewTermsAndConditions}</button>
          </label>
        </div>
        {/**/}
        <div>
          <label className="font-semibold text-sm text-gray-600 pb-1 inline-flex items-center mt-1 mb-5 w-full">
            <input
              name="personal_info_consent"
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600"
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
    </AuthPaper>
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
