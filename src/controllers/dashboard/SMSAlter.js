import React from "react"
import { createSMS } from "../../services/api"
import SMSAlterView from "../../views/dashboard/SMSAlterView"
import { useForm } from "react-hook-form"
import { useCookies } from "react-cookie"
import { useHistory } from "react-router-dom"
import Lang from "../../services/lang"
//
export default function SMSAlter() {
  const [loaded, setLoaded] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)
  const history = useHistory()
  const [cookies] = useCookies()
  const [mode] = React.useState({
    title: Lang.sendSMS,
    buttonLabel: Lang.send
  })
  //
  const methods = useForm({
    criteriaMode: "all",
    mode: "onSubmit",
    defaultValues: React.useMemo(() => {}, [])
  })
  //
  React.useEffect(() => {
    ;(async () => {
      await setLoaded(true)
    })()
  }, [methods])
  //
  const onCreateSubmit = async (data) => {
    const result = await createSMS(data, cookies["token"])
    if (!result) return
    history.replace("/dashboard/sms")
  }
  const onActionCallback = async (e) => {
    await methods.handleSubmit(onCreateSubmit)()
  }
  //
  const onValidateCallback = async () => {
    return await methods.trigger()
  }
  //
  const onCancelActionCallback = async (e) => {
    history.replace("/dashboard/sms")
  }
  //
  if (!loaded) return <div />
  return (
    <SMSAlterView
      methods={methods}
      disabled={disabled}
      setDisabled={setDisabled}
      onActionCallback={onActionCallback}
      onValidateCallback={onValidateCallback}
      onCancelActionCallback={onCancelActionCallback}
      mode={mode}
    />
  )
}
