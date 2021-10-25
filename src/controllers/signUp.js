import React from "react"
import SignUpView from "../views/signUpView"
import AppContext from "../services/context"
import { useCookies } from "react-cookie"
import { checkAuth, getSettings } from "../services/api"
import { useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import { signUp, uploadImage } from "../services/api"
//
export default function SignUp() {
  const [loaded, setLoaded] = React.useState(false)
  const { appState, appDispatch } = React.useContext(AppContext)
  const [cookies, , removeCookie] = useCookies()
  const [userType, setUserType] = React.useState("")
  const [step, setStep] = React.useState(1)
  const history = useHistory()
  //
  const methods = useForm({
    criteriaMode: "all",
    mode: "onSubmit",
    defaultValues: {
      user_type: userType,
      // TODO: update based on sign-up method (Social)
      user_method: "EMAIL"
    }
  })
  //
  React.useEffect(() => {
    ;(async () => {
      if (cookies["token"]) {
        if (!(await checkAuth(cookies["token"]))) {
          await appDispatch({ type: "UpdateCurrentUser", payload: null })
          await appDispatch({ type: "UpdateIsAuth", payload: false })
          removeCookie("token")
        } else {
          appDispatch({ type: "UpdateIsAuth", payload: true })
          history.replace("/")
        }
      } else {
        await appDispatch({ type: "UpdateCurrentUser", payload: null })
        await appDispatch({ type: "UpdateIsAuth", payload: false })
      }
      //
      if (appState.appSettings == null) {
        const result = await getSettings()
        if (result) appDispatch({ type: "UpdateSettings", payload: result })
      }
      //
      await setLoaded(true)
    })()
  }, [appState.appSettings, cookies, removeCookie, appDispatch, history])
  //
  const onSubmit = async (data) => {
    const result = await signUp(data)
    if (!result) return
    history.push("/sign-in")
  }
  //
  const onUpdateUserType = async (e, type, step) => {
    await setUserType(type)
    await setStep(step)
    await methods.setValue("user_type", type, { shouldValidate: true })
  }
  //
  const onBusinessLicenseChange = async (e) => {
    if (!e.target.files[0]) {
      await methods.setValue("business_license_url", null, {
        shouldValidate: true
      })
      return
    }
    const result = await uploadImage(e.target.files[0])
    if (!result) return
    await methods.setValue("business_license_url", result.url, {
      shouldValidate: true
    })
  }
  //
  const onbrokerageRegistrationChange = async (e) => {
    if (!e.target.files[0]) {
      await methods.setValue("brokerage_card_url", null, {
        shouldValidate: true
      })
      return
    }
    const result = await uploadImage(e.target.files[0])
    if (!result) return
    await methods.setValue("brokerage_card_url", result.url, {
      shouldValidate: true
    })
  }
  if (!loaded) return <div />
  return (
    <SignUpView
      isAuth={appState.isAuth}
      userRole={appState.currentUser?.user_role}
      userType={appState.currentUser?.user_type}
      settings={appState.appSettings}
      methods={methods}
      onSubmit={onSubmit}
      onBusinessLicenseChange={onBusinessLicenseChange}
      onbrokerageRegistrationChange={onbrokerageRegistrationChange}
      onUpdateUserType={onUpdateUserType}
      formUserType={userType}
      step={step}
    />
  )
}
