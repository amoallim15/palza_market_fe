import React from "react"
import ProfileView from "../../views/dashboard/profileView"
import { useForm } from "react-hook-form"
import AppContext from "../../services/context"
import { updateUser, changeUserPwd } from "../../services/api"
import { useCookies } from "react-cookie"
//
export default function Profile() {
  const [currentTab, setCurrentTab] = React.useState(0)
  const { appState } = React.useContext(AppContext)
  const [cookies] = useCookies()
  const [infoDisabled, setInfoDisabled] = React.useState(true)
  const [pwdDisabled, setPwdDisabled] = React.useState(true)
  //
  const infoMethods = useForm({
    criteriaMode: "all",
    mode: "onSubmit",
    defaultValues: appState.currentUser
  })
  //
  const pwdMethods = useForm({
    criteriaMode: "all",
    mode: "onSubmit",
    defaultValues: { _id: appState.currentUser._id }
  })
  //
  const onInfoActionCallback = async (e) => {
    await infoMethods.handleSubmit(onInfoSubmit)()
  }
  const onInfoValidateCallback = async () => {
    return await infoMethods.trigger()
  }
  //
  const onInfoResetCallback = async () => {
    await infoMethods.reset(appState.currentUser)
  }
  //
  const onPwdActionCallback = async (e) => {
    await pwdMethods.handleSubmit(onPwdSubmit)()
    await onPwdResetCallback()
  }
  const onPwdValidateCallback = async () => {
    return await pwdMethods.trigger()
  }
  //
  const onPwdResetCallback = async () => {
    await pwdMethods.reset({
      _id: appState.currentUser._id,
      password: "",
      new_password: "",
      confirm_new_password: ""
    })
  }
  //
  const onTabChange = (event, newValue) => {
    setCurrentTab(newValue)
  }
  //
  const onInfoSubmit = async (data) => {
    const result = await updateUser(data, cookies["token"])
    if (!result) return
  }
  //
  const onPwdSubmit = async (data) => {
    const result = await changeUserPwd(data, cookies["token"])
    if (!result) return
  }
  //
  return (
    <ProfileView
      isAgency={appState.currentUser.user_type === "AGENCY"}
      currentTab={currentTab}
      onTabChange={onTabChange}
      infoMethods={infoMethods}
      pwdMethods={pwdMethods}
      infoDisabled={infoDisabled}
      setInfoDisabled={setInfoDisabled}
      pwdDisabled={pwdDisabled}
      setPwdDisabled={setPwdDisabled}
      onInfoActionCallback={onInfoActionCallback}
      onInfoValidateCallback={onInfoValidateCallback}
      onInfoResetCallback={onInfoResetCallback}
      onPwdActionCallback={onPwdActionCallback}
      onPwdValidateCallback={onPwdValidateCallback}
      onPwdResetCallback={onPwdResetCallback}
    />
  )
}
