import React from "react"
import { updateSettings } from "../../services/api"
import AppContext from "../../services/context"
import { useHistory } from "react-router-dom"
import SettingsView from "../../views/dashboard/settingsView"
import { useForm } from "react-hook-form"
import { useCookies } from "react-cookie"
//
export default function Settings() {
  const [loaded, setLoaded] = React.useState(false)
  const { appState } = React.useContext(AppContext)
  const history = useHistory()
  const [disabled, setDisabled] = React.useState(true)
  const [cookies] = useCookies()
  //
  const methods = useForm({
    criteriaMode: "all",
    mode: "onSubmit",
    defaultValues: appState.appSettings
  })
  //
  const onSubmit = async (data) => {
    const result = await updateSettings(data, cookies["token"])
    if (!result) return
  }
  //
  const onActionCallback = async (e) => {
    await methods.handleSubmit(onSubmit)()
  }
  //
  const onValidateCallback = async () => {
    return await methods.trigger()
  }
  //
  const onResetCallback = async () => {
    await methods.reset(appState.appSettings)
  }
  //
  React.useEffect(() => {
    ;(async () => {
      if (appState.currentUser.user_role !== "ADMIN") {
        history.replace("/dashboard/profile")
      }
      await setLoaded(true)
    })()
  }, [appState.currentUser, history])
  //
  if (!loaded) return <div />
  return (
    <SettingsView
      methods={methods}
      disabled={disabled}
      setDisabled={setDisabled}
      onActionCallback={onActionCallback}
      onValidateCallback={onValidateCallback}
      onResetCallback={onResetCallback}
    />
  )
}
