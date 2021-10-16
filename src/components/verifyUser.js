import React from "react"
import { FormPopup } from "./popup"
import { getVerifyUserHash } from "../services/api"
import { useFormContext } from "react-hook-form"
import EN from "../services/lang"
//
let form_el = document.createElement("form")
let encode_data_el = document.createElement("input")
let m_el = document.createElement("input")
//
export default function VerifyUser({ onVerifyUser, disabled }) {
  const methods = useFormContext()
  //
  const updateVerifyUserForm = (hash) => {
    form_el.setAttribute("method", "POST")
    // form_el.setAttribute("action", PASS_AUTH_URL)
    form_el.setAttribute("target", "identity_check")
    //
    encode_data_el.setAttribute("type", "hidden")
    encode_data_el.setAttribute("name", "EncodeData")
    encode_data_el.setAttribute("value", hash)
    m_el.setAttribute("type", "hidden")
    m_el.setAttribute("name", "m")
    m_el.setAttribute("value", "checkplusService")
    //
    form_el.append(encode_data_el)
    form_el.append(m_el)
  }
  //
  const onInit = async (e) => {
    return await getVerifyUserHash()
  }
  //
  const onEvent = async (event, res, err) => {
    if (event === "OPENED") {
      updateVerifyUserForm(res.preValue)
      document.body.append(form_el)
      form_el.submit()
      // document.body.remove(form_el)
    } else if (event === "SUCCESS") {
      await methods.setValue("name", res.name.replace(/\+/g, " "), {
        shouldValidate: true
      })
      await methods.setValue("phone_no", res.mobile, { shouldValidate: true })
      onVerifyUser && (await onVerifyUser())
    }
  }
  //
  return (
    <FormPopup
      name="verify_user"
      label={"본인 인증"}
      onInit={onInit}
      onEvent={onEvent}
      disabled={disabled}
      className="mb-5 transition duration-200 bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 focus:shadow-sm focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
    >
      {EN.verifyUser}
    </FormPopup>
  )
}
