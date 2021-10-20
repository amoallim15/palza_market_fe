import React from "react"
import ProfileView from "../views/profileView"
import { useForm } from "react-hook-form"
import AppContext from "../services/context"
import { updateUser } from "../services/api"
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
  const [infoMode, setInfoMode] = React.useState({
    disabled: true,
    buttonLabel: Lang.edit,
    buttonDisabled: false,
    editing: false
  })
  console.log(setInfoMode)
  //
  const onInfoActionClick = (e) => {}
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
  return (
    <ProfileView
      currentTab={currentTab}
      onTabChange={onTabChange}
      infoMethods={infoMethods}
      onInfoActionClick={onInfoActionClick}
      onInfoSubmit={onInfoSubmit}
      infoMode={infoMode}
      isAgency={appState.currentUser.user_type === "AGENCY"}
    />
  )
}
