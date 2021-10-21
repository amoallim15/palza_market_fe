import { CONFIG } from "./config"
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
  return await call("/image/tmp", "POST", null, formData)
}
//
export const signUp = async (data) => {
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
  return await call(
    "/settings",
    "PUT",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    JSON.stringify(data)
  )
}
//
export const updateUser = async (data, token) => {
  //
  return await call(
    `/user/${data._id}`,
    "PUT",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    JSON.stringify(data)
  )
}
//
export const changeUserPwd = async (data, token) => {
  return await call(
    `/auth/${data._id}`,
    "PATCH",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    JSON.stringify(data)
  )
}
//
export const getNoticeCategories = async () => {
  return await call("/notice-category", "GET")
}
//
export const getNotices = async (page) => {
  return await call(`/notice?page=${page}`, "GET")
}
//
export const createNotice = async (data, token) => {
  return await call(
    "/notice",
    "POST",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    JSON.stringify(data)
  )
}
//
export const getNotice = async (notice_id) => {
  return await call(`/notice/${notice_id}`, "GET")
}
//
export const updateNotice = async (notice_id, data, token) => {
  return await call(
    `/notice/${notice_id}`,
    "PUT",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    JSON.stringify(data)
  )
}
