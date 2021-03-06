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
export const getNotice = async (notice_id) => {
  return await call(`/notice/${notice_id}`, "GET")
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
//
export const deleteNotice = async (notice_id, token) => {
  return await call(`/notice/${notice_id}`, "DELETE", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
//
//
export const getFranchises = async (page) => {
  return await call(`/franchise?page=${page}`, "GET")
}
//
export const getFranchise = async (franchise_id) => {
  return await call(`/franchise/${franchise_id}`, "GET")
}
//
export const createFranchise = async (data, token) => {
  return await call(
    "/franchise",
    "POST",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    JSON.stringify(data)
  )
}
//
export const updateFranchise = async (franchise_id, data, token) => {
  return await call(
    `/franchise/${franchise_id}`,
    "PUT",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    JSON.stringify(data)
  )
}
//
export const deleteFranchise = async (franchise_id, token) => {
  return await call(`/franchise/${franchise_id}`, "DELETE", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
//
//
export const getMagazines = async (page) => {
  return await call(`/magazine?page=${page}`, "GET")
}
//
export const getMagazine = async (magazine_id) => {
  return await call(`/magazine/${magazine_id}`, "GET")
}
//
export const createMagazine = async (data, token) => {
  return await call(
    "/magazine",
    "POST",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    JSON.stringify(data)
  )
}
//
export const updateMagazine = async (magazine_id, data, token) => {
  return await call(
    `/magazine/${magazine_id}`,
    "PUT",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    JSON.stringify(data)
  )
}
//
export const deleteMagazine = async (magazine_id, token) => {
  return await call(`/magazine/${magazine_id}`, "DELETE", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
//
//
export const getCrontabs = async (page, token) => {
  return await call(`/crontab?page=${page}`, "GET", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
//
export const createCrontab = async (token) => {
  return await call("/crontab", "POST", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
//
//
export const getSMSs = async (page, token) => {
  return await call(`/sms?page=${page}`, "GET", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
//
export const createSMS = async (data, token) => {
  return await call(
    "/sms",
    "POST",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    JSON.stringify(data)
  )
}
//
//
export const getReports = async (page, token) => {
  return await call(`/report?page=${page}`, "GET", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
//
export const getReport = async (report_id, token) => {
  return await call(`/report/${report_id}`, "GET", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
//
export const createReport = async (data, token) => {
  return await call(
    "/report",
    "POST",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    JSON.stringify(data)
  )
}
//
export const updateReport = async (report_id, data, token) => {
  return await call(
    `/report/${report_id}`,
    "PUT",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    JSON.stringify(data)
  )
}
//
export const deleteReport = async (report_id, token) => {
  return await call(`/report/${report_id}`, "DELETE", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
//
//
export const getAgencyReviews = async (page, agency_id) => {
  return await call(`/review/agent/${agency_id}?page=${page}`, "GET")
}
//
export const getReviews = async (page) => {
  return await call(`/review?page=${page}`, "GET")
}
//
export const getReview = async (review_id) => {
  return await call(`/review/${review_id}`, "GET")
}
//
export const createReview = async (data, token) => {
  return await call(
    "/review",
    "POST",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    JSON.stringify(data)
  )
}
//
export const updateReview = async (review_id, data, token) => {
  return await call(
    `/review/${review_id}`,
    "PUT",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    JSON.stringify(data)
  )
}
//
export const deleteReview = async (review_id, token) => {
  return await call(`/review/${review_id}`, "DELETE", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
//
//
