import React from "react"
import { createReport, updateReport, getReport } from "../../services/api"
import ReportAlterView from "../../views/dashboard/reportAlterView"
import { useForm } from "react-hook-form"
import { useCookies } from "react-cookie"
import { useHistory, useParams, useLocation } from "react-router-dom"
import AppContext from "../../services/context"
import Lang from "../../services/lang"
//
export default function ReportAlter() {
  const [loaded, setLoaded] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)
  const { appState } = React.useContext(AppContext)
  const history = useHistory()
  const location = useLocation()
  const [cookies] = useCookies()
  const params = useParams()
  const [mode] = React.useState({
    method: "UPDATE",
    title: Lang.updateReport,
    buttonLabel: Lang.update
  })
  const [isMy, setIsMy] = React.useState(
    !!location.pathname.includes("my-report")
  )
  //
  const methods = useForm({
    criteriaMode: "all",
    mode: "onSubmit",
    defaultValues: React.useMemo(() => {}, [])
  })
  //
  methods.register("thumbnail_url", { required: true })
  //
  React.useEffect(() => {
    ;(async () => {
      //
      const loc = !!location.pathname.includes("my-report")
      if (loc !== isMy) await setIsMy(loc)
      //
      if (
        !loc &&
        !["ADMIN", "EMPLOYEE"].includes(appState.currentUser.user_role)
      ) {
        history.replace("/dashboard/profile")
      }
      //
      let result = null
      if (params.report_id) result = await getReport(params.report_id)
      //
      if (result) {
        await methods.reset(result)
      } else {
        history.replace("/dashboard/" + (isMy ? "my-report" : "report"))
      }
      //
      await setLoaded(true)
    })()
  }, [
    history,
    params.report_id,
    methods,
    location.pathname,
    isMy,
    appState.currentUser.user_role
  ])
  //
  const onCreateSubmit = async (data) => {
    const result = await createReport(data, cookies["token"])
    if (!result) return
    history.replace("/dashboard/" + (isMy ? "my-report" : "report"))
  }
  const onUpdateSubmit = async (data) => {
    const result = await updateReport(params.report_id, data, cookies["token"])
    if (!result) return
    history.replace("/dashboard/" + (isMy ? "my-report" : "report"))
  }
  //
  const onActionCallback = async (e) => {
    if (mode.method === "CREATE") await methods.handleSubmit(onCreateSubmit)()
    else await methods.handleSubmit(onUpdateSubmit)()
  }
  //
  const onValidateCallback = async () => {
    return await methods.trigger()
  }
  //
  const onCancelActionCallback = async (e) => {
    history.replace("/dashboard/" + (isMy ? "my-report" : "report"))
  }
  //
  if (!loaded) return <div />
  return (
    <ReportAlterView
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
