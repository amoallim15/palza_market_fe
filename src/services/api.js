import { CONFIG } from "./config"
//
const call = async (url, method, headers, params, body) => {
  const request_url = new URL(url, CONFIG.API_ENDPOINT)
  //
  const config = { method: method }
  if (params) request_url.search = new URLSearchParams(params)
  if (headers) config["headers"] = headers
  if (body) config["body"] = body
  //
  try {
    let response = await fetch(request_url, config)
    if (response.status >= 300) return false
    let result = await response.json()
    return result
  } catch (err) {
    console.log(err)
    // TODO: show error message..
  }
}
// 
// 
// API GET CALLS
//
export const checkAuth = async (token) => {
  return await call("/auth", "GET", {
    Authorization: `Bearer ${token.access_token}`
  })
}
export const getSettings = async () => {
  return await call("/settings", "GET")
}
export const getAgencyInfo = async (name) => {
  return await call("/agency_info", "GET", null, {
    name: name
  })
}
export const getNoticeCategories = async () => {
  return await call("/notice-category", "GET")
}
export const getNoticeCategory = async (notice_category_id) => {
  return await call(`/notice-category/${notice_category_id}`, "GET")
}
export const getNotices = async (keywords, page, page_size) => {
  let params = {
    page: page,
    page_size: page_size,
  }
  if (keywords !== null || keywords !== "")
    params["keywords"] = keywords
  // 
  return await call("/notice", "GET", null, params)
}
export const getNotice = async (notice_id) => {
  return await call(`/notice/${notice_id}`, "GET")
}
export const getFranchises = async (page, page_size) => {
  return await call("/franchise", "GET", null, {
    page: page,
    page_size: page_size,
  })
}
export const getFranchise = async (franchise_id) => {
  return await call(`/franchise/${franchise_id}`, "GET")
}
export const getMagazines = async (page, page_size) => {
  return await call("/magazine", "GET", null, {
    page: page,
    page_size: page_size,
  })
}
export const getMagazine = async (magazine_id) => {
  return await call(`/magazine/${magazine_id}`, "GET")
}
export const getCrontabs = async (token, page, page_size) => {
  return await call("/crontab", "GET", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  }, {
    page: page,
    page_size: page_size,
  })
}
export const getSMSs = async (token, page, page_size) => {
  return await call("/sms", "GET", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  },{
    page: page,
    page_size: page_size,
  })
}
export const getSMSCount = async (token) => {
  return await call("/sms/count", "GET", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
export const getReports = async (token, page, page_size) => {
  return await call("/report", "GET", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  }, {
    page: page,
    page_size: page_size,
  })
}
export const getReport = async (token, report_id) => {
  return await call(`/report/${report_id}`, "GET", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
export const getReviews = async (page, page_size) => {
  return await call("/review", "GET", null, {
    page: page,
    page_size: page_size,
  })
}
export const getAgencyReviews = async (agency_id, page, page_size) => {
  return await call(`/review/agent/${agency_id}`, "GET", null, {
    page: page,
    page_size: page_size,
  })
}
export const getReview = async (review_id) => {
  return await call(`/review/${review_id}`, "GET")
}
export const getRealstates = async (page, page_size) => {
  return await call("/realstate", "GET", null, {
    page: page,
    page_size: page_size,
  })
}
export const getRealstate = async (realstate_id) => {
  return await call(`/realstate/${realstate_id}`, "GET")
}
export const getBanners = async () => {
  return await call("/banner", "GET")
}
export const getBanner = async (location) => {
  return await call(`/banner/${location}`, "GET")
}
// 
// 
// API POST CALLS
export const uploadImage = async (file) => {
  const formData = new FormData()
  formData.append("image", file, file.name)
  //
  return await call("/image/tmp", "POST", null, null, formData)
}
export const createCrontab = async (token) => {
  return await call("/crontab", "POST", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
export const signUp = async (data) => {
  return await call(
    "/user",
    "POST",
    { "content-type": "application/json" },
    null,
    JSON.stringify(data)
  )
}
export const signIn = async (data) => {
  return await call(
    "/auth",
    "POST",
    { "content-type": "application/json" },
    null,
    JSON.stringify(data)
  )
}
export const createNotice = async (token, data) => {
  return await call(
    "/notice",
    "POST",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    null,
    JSON.stringify(data)
  )
}
export const createFranchise = async (token, data) => {
  return await call(
    "/franchise",
    "POST",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    null,
    JSON.stringify(data)
  )
}
export const createMagazine = async (token, data) => {
  return await call(
    "/magazine",
    "POST",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    null,
    JSON.stringify(data)
  )
}
export const createSMS = async (token, data) => {
  return await call(
    "/sms",
    "POST",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    null,
    JSON.stringify(data)
  )
}
export const createReview = async (token, data) => {
  return await call(
    "/review",
    "POST",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    null,
    JSON.stringify(data)
  )
}
export const createReport = async (token, data) => {
  return await call(
    "/report",
    "POST",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    null,
    JSON.stringify(data)
  )
}
export const createRealstate = async (token, data) => {
  return await call(
    "/realstate",
    "POST",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    null,
    JSON.stringify(data)
  )
}
// 
// 
// API Update Requests
// 
export const updateSettings = async (token, data) => {
  return await call(
    "/settings",
    "PUT",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    null,
    JSON.stringify(data)
  )
}
export const updateUser = async (token, data) => {
  //
  return await call(
    `/user/${data._id}`,
    "PUT",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    null,
    JSON.stringify(data)
  )
}
//
export const changeUserPwd = async (token, data) => {
  return await call(
    `/auth/${data._id}`,
    "PATCH",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    null,
    JSON.stringify(data)
  )
}
export const updateNotice = async (token, notice_id, data) => {
  return await call(
    `/notice/${notice_id}`,
    "PUT",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    null,
    JSON.stringify(data)
  )
}
export const updateFranchise = async (token, franchise_id, data) => {
  return await call(
    `/franchise/${franchise_id}`,
    "PUT",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    null,
    JSON.stringify(data)
  )
}
export const updateMagazine = async (token, magazine_id, data) => {
  return await call(
    `/magazine/${magazine_id}`,
    "PUT",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    null,
    JSON.stringify(data)
  )
}
export const updateReport = async (token, report_id, data) => {
  return await call(
    `/report/${report_id}`,
    "PUT",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    null,
    JSON.stringify(data)
  )
}
export const updateReview = async (token, review_id, data) => {
  return await call(
    `/review/${review_id}`,
    "PUT",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    null,
    JSON.stringify(data)
  )
}
export const updateBanner = async (token, location, data) => {
  return await call(
    `/banner/${location}`,
    "PUT",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    null,
    JSON.stringify(data)
  )
}
export const updateRealstate = async (token, realstate_id, data) => {
  return await call(
    `/realstate/${realstate_id}`,
    "PUT",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${token.access_token}`
    },
    null,
    JSON.stringify(data)
  )
}
// 
// 
// API Delete Requests
// 
export const deleteNotice = async (token, notice_id) => {
  return await call(`/notice/${notice_id}`, "DELETE", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
export const deleteFranchise = async (token, franchise_id) => {
  return await call(`/franchise/${franchise_id}`, "DELETE", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
export const deleteMagazine = async (token, magazine_id) => {
  return await call(`/magazine/${magazine_id}`, "DELETE", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
export const deleteReport = async (token, report_id) => {
  return await call(`/report/${report_id}`, "DELETE", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
export const deleteReview = async (token, review_id) => {
  return await call(`/review/${review_id}`, "DELETE", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
export const deleteBanner = async (token, location) => {
  return await call(`/banner/${location}`, "DELETE", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`
  })
}
export const deleteRealstate = async (token, realstate_id) => {
  return await call(`/realstate/${realstate_id}`, "DELETE", {
    "content-type": "application/json",
    Authorization: `Bearer ${token.access_token}`,
  })
}