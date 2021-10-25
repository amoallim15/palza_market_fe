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
        <div className="my-4 p-10 card bg-base-200 h-full justify-center">
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
        <div className="my-4 p-10 card bg-base-200 h-full justify-center">
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
    <div className="my-4 p-4 card bg-base-200">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {formUserType === "AGENCY" && <AuthAgencyInfo />}
          <div className="px-5 py-7">
            {/**/}
            {formUserType === "AGENCY" && (
              <>
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  <span className="label-text">{Lang.managerPhoneNo}</span>
                </label>
                <input
                  type="text"
                  className="input input-ghost w-full"
                  {...methods.register("manager_phone_no")}
                />
              </>
            )}
            {/**/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">{Lang.username}</span>
              </label>
              <input
                type="text"
                className="input input-ghost w-full"
                {...methods.register("username", { required: true })}
              />
            </div>
            {/**/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">{Lang.email}</span>
              </label>
              <input
                type="email"
                className="input input-ghost w-full"
                {...methods.register("email", { required: true })}
              />
            </div>
            {/**/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">{Lang.name}</span>
              </label>
              <input
                type="text"
                className="input input-ghost w-full"
                {...methods.register("name", { required: true })}
              />
            </div>
            {/**/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">{Lang.phoneNo}</span>
              </label>
              <input
                type="text"
                className="input input-ghost w-full"
                {...methods.register("phone_no", { required: true })}
              />
            </div>
            {/**/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">{Lang.password}</span>
              </label>
              <input
                type="password"
                className="input input-ghost w-full"
                {...methods.register("password", {
                  required: true,
                  pattern: /^((?=.*\d)(?=.*[a-z])(?=.*[\W]).{8,16})$/
                })}
              />
            </div>
            {/**/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">{Lang.confirmPassword}</span>
              </label>
              <input
                type="password"
                className="input input-ghost w-full"
                {...methods.register("confirm_password", {
                  required: true,
                  validate: {
                    unmatched: (v) => v === methods.getValues("password")
                  }
                })}
              />
            </div>
          </div>
          {formUserType === "AGENCY" && (
            <div className="p-5 py-7">
              {/**/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    {Lang.businessRegistrationNo}
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-ghost w-full"
                  {...methods.register("business_registeration_no", {
                    required: true
                  })}
                />
              </div>
              {/**/}
              <div className="form-control">
                {/**/}
                <label className="label">
                  <span className="label-text">{Lang.businessLicense}</span>
                </label>
                <input
                  type="hidden"
                  {...methods.register("business_license_url", {
                    required: true
                  })}
                />
                <input
                  type="file"
                  className="input input-ghost w-full"
                  onChange={onBusinessLicenseChange}
                />
              </div>
              {/**/}
              <div className="form-control">
                {/**/}
                <label className="label">
                  <span className="label-text">
                    {Lang.brokerageRegistrationCard}
                  </span>
                </label>
                <input
                  type="hidden"
                  {...methods.register("brokerage_card_url", {
                    required: true
                  })}
                />
                <input
                  type="file"
                  className="input input-ghost w-full"
                  onChange={onbrokerageRegistrationChange}
                />
              </div>
              {/**/}
            </div>
          )}
          <div className="p-5 py-7">
            <div>
              <label className="label">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  {...methods.register("terms_and_conditions_consent", {
                    required: true
                  })}
                />
                <span className="labal-text ml-2 text-red-700 text-sm">
                  [{Lang.must}]
                </span>
                <span className="labal-text ml-2 text-sm">
                  {Lang.termsAndConditions}
                </span>
                <div className="flex-grow" />
                <button className=" text-sm">
                  {Lang.viewTermsAndConditions}
                </button>
              </label>
            </div>
            {/**/}
            <div>
              <label className="label">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  {...methods.register("personal_info_use_consent", {
                    required: true
                  })}
                />
                <span className="labal-text ml-2 text-red-700 text-sm">
                  [{Lang.must}]
                </span>
                <span className="labal-text ml-2 text-sm">{Lang.consent}</span>
                <div className="flex-grow" />
                <button className=" text-sm">
                  {Lang.viewTermsAndConditions}
                </button>
              </label>
            </div>
          </div>
          <div className="p-5">
            <button
              type="submit"
              className="btn btn-primary w-full text-center"
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
      <div className="container mx-auto px-4 pt-10 pb-4 flex-grow">
        <h1 className="text-center text-4xl font-bold mb-8">{Lang.signUp}</h1>
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
