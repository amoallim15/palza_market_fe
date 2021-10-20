import React from "react"
import ProfileView from "../views/profileView"
import { useForm } from "react-hook-form"
import AppContext from "../services/context"
import { updateUser, changeUserPwd } from "../services/api"
import Lang from "../services/lang"
import { useCookies } from "react-cookie"
//
export default function Profile() {
  const [currentTab, setCurrentTab] = React.useState(0)
  const { appState } = React.useContext(AppContext)
  const [cookies] = useCookies()
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
  const [infoMode, setInfoMode] = React.useState({
    disabled: true,
    buttonLabel: Lang.edit,
    buttonDisabled: false,
    editing: false
  })
  //
  const [pwdMode, setPwdMode] = React.useState({
    disabled: true,
    buttonLabel: Lang.edit,
    buttonDisabled: false,
    editing: false
  })
  //
  const onInfoActionClick = async (e) => {
    if (infoMode.editing === false) {
      await setInfoMode({
        disabled: false,
        buttonLabel: Lang.save,
        editing: true,
        buttonDisabled: false
      })
    } else if (infoMode.editing === true) {
      if (!(await infoMethods.trigger())) return
      await setInfoMode({
        disabled: true,
        buttonLabel: Lang.pending,
        editing: null,
        buttonDisabled: true
      })
      await infoMethods.handleSubmit(onInfoSubmit)()
      window.setTimeout(async () => {
        await setInfoMode({
          disabled: true,
          buttonLabel: Lang.edit,
          editing: false,
          buttonDisabled: false
        })
      }, 1000)
    } else {
      return
    }
  }
  //
  const onPwdActionClick = async (e) => {
    if (pwdMode.editing === false) {
      await setPwdMode({
        disabled: false,
        buttonLabel: Lang.save,
        editing: true,
        buttonDisabled: false
      })
    } else if (pwdMode.editing === true) {
      if (!(await pwdMethods.trigger())) return
      await setPwdMode({
        disabled: true,
        buttonLabel: Lang.pending,
        editing: null,
        buttonDisabled: true
      })
      await pwdMethods.handleSubmit(onPwdSubmit)()
      window.setTimeout(async () => {
        await pwdMethods.reset({
          _id: appState.currentUser._id,
          password: "",
          new_password: "",
          confirm_new_password: ""
        })
        await setPwdMode({
          disabled: true,
          buttonLabel: Lang.edit,
          editing: false,
          buttonDisabled: false
        })
      }, 1000)
    } else {
      return
    }
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
    console.log(data)
    const result = await changeUserPwd(data, cookies["token"])
    if (!result) return
  }
  //
  return (
    <ProfileView
      currentTab={currentTab}
      onTabChange={onTabChange}
      infoMethods={infoMethods}
      onInfoActionClick={onInfoActionClick}
      onInfoSubmit={onInfoSubmit}
      infoMode={infoMode}
      pwdMethods={pwdMethods}
      onPwdActionClick={onPwdActionClick}
      onPwdSubmit={onPwdSubmit}
      pwdMode={pwdMode}
      isAgency={appState.currentUser.user_type === "AGENCY"}
    />
  )
}
