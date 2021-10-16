export const CONFIG = {
  CLIENT_ENDPOINT: `http://${window.location.host}`,
  API_ENDPOINT: "http://localhost:8000",
  PASS_ENDPOINT: "https://nice.checkplus.co.kr",
  KAKAO_ENDPOINT: "https://kauth.kakao.com",
  NAVER_ENDPOINT: "https://nid.naver.com",
  GOOGLE_ENDPOINT: "https://accounts.google.com",
  NSDI_ENDPOINT: "http://openapi.nsdi.go.kr"
}
//
export function NSDI_URL(app_key) {
  const url = new URL(
    "/nsdi/EstateBrkpgService/attr/getEBOfficeInfo",
    CONFIG.NSDI_ENDPOINT
  )
  url.search = new URLSearchParams({
    authkey: app_key,
    numOfRows: 10,
    pageNo: 1,
    format: "json"
  })
  return url
}
//
export function KAKAO_AUTH_URL(app_key) {
  const url = new URL("/oauth/authorize", CONFIG.KAKAO_ENDPOINT)
  url.search = new URLSearchParams({
    response_type: "code",
    client_id: app_key,
    redirect_uri: `${CONFIG.API_ENDPOINT}/callback/kakao`
  })
  return url
}
//
export function NAVER_AUTH_URL(app_key) {
  const url = new URL("/oauth2.0/authorize", CONFIG.NAVER_ENDPOINT)
  url.search = new URLSearchParams({
    response_type: "code",
    client_id: app_key,
    redirect_uri: `${CONFIG.API_ENDPOINT}/callback/naver`
  })
  return url
}
//
export function GOOGLE_AUTH_URL(app_key) {
  const url = new URL(
    "/o/oauth2/v2/auth/oauthchooseaccount",
    CONFIG.GOOGLE_ENDPOINT
  )
  url.search = new URLSearchParams({
    response_type: "code",
    // access_type: "online",
    scope: [
      "https://www.googleapis.com/auth/contacts.readonly",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile"
    ].join(" "),
    client_id: app_key,
    redirect_uri: `${CONFIG.API_ENDPOINT}/callback/google`
  })
  return url
}
