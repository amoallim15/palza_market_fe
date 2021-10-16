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
export const checkAuth = async () => {
  return await call("/auth", "GET")
}
