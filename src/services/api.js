import { CONFIG } from "./config"
//
export const getVerifyUserHash = async () => {
  // TODO:
  return await "TODO"
}
//
const call = async (url, method, headers, body) => {
  const REQUEST_URL = new URL(url, CONFIG.API_ENDPOINT)
  //
  const config = { method: method }
  if (headers) config["headers"] = headers
  if (body) config["body"] = body
  //
  let response = await fetch(REQUEST_URL, config)
  if (response.status >= 300) return false
  let result = await response.json()
  return result
}
//
export const getSettings = async () => {
  return await call("/settings", "GET")
}
//
export const getBusinessInfo = async (url) => {
  let result = await call(url, "GET")
  if (result) return result.EBOffices?.field
  return result
}
//
export const uploadImage = async (file) => {
  const formData = new FormData()
  formData.append("image", file, file.name)
  //
  return await call("/image/temporary", "POST", null, formData)
}
//
export const signUp = async (data) => {
  delete data.personal_info_consent
  delete data.terms_and_conditions
  delete data.confirm_password
  delete data.verify_user
  //
  return await call(
    "/user",
    "POST",
    { "content-type": "application/json" },
    JSON.stringify(data)
  )
}
//
export const signIn = async (data) => {
  return await call(
    "/auth",
    "POST",
    { "content-type": "application/json" },
    JSON.stringify(data)
  )
}
//
export const checkAuth = async (token) => {
  return await call("/auth", "GET", {
    Authorization: `Bearer ${token.access_token}`
  })
}
//
export const updateSettings = async (data, token) => {
  delete data._id
  //
  return await call(
    "/settings",
    "PUT",
    { "content-type": "application/json" },
    JSON.stringify(data)
  )
}
//
export const updateUser = async (data, token) => {
  const _id = data._id
  delete data._id
  delete data.user_role
  delete data.user_type
  delete data.user_method
  delete data.name
  delete data.legal_address
  delete data.business_representative
  delete data.business_registeration_no
  delete data.business_name
  delete data.business_license_url
  delete data.brokerage_record_no
  delete data.brokerage_card_url
  //
  return await call(
    `/user/${_id}`,
    "PUT",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    JSON.stringify(data)
  )
}
