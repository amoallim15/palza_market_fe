import React from "react"
import { createReview, updateReview, getReview } from "../../services/api"
import ReviewAlterView from "../../views/dashboard/reviewAlterView"
import { useForm } from "react-hook-form"
import { useCookies } from "react-cookie"
import { useHistory, useParams, useLocation } from "react-router-dom"
import Lang from "../../services/lang"
import AppContext from "../../services/context"
//
export default function ReviewAlter() {
  const [loaded, setLoaded] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)
  const { appState } = React.useContext(AppContext)
  const history = useHistory()
  const location = useLocation()
  const [cookies] = useCookies()
  const params = useParams()
  const [mode, setMode] = React.useState({
    method: "UPDATE",
    title: Lang.updateReview,
    buttonLabel: Lang.update
  })
  const [isMy, setIsMy] = React.useState(
    !!location.pathname.includes("my-review")
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
      console.log(setMode)
      const loc = !!location.pathname.includes("my-review")
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
      if (params.review_id) result = await getReview(params.review_id)
      //
      if (result) {
        await methods.reset(result)
      } else {
        history.replace("/dashboard/" + (isMy ? "my-review" : "review"))
      }
      //
      await setLoaded(true)
    })()
  }, [
    history,
    params.review_id,
    methods,
    location.pathname,
    isMy,
    appState.currentUser.user_role
  ])
  //
  const onCreateSubmit = async (data) => {
    const result = await createReview(data, cookies["token"])
    if (!result) return
    history.replace("/dashboard/" + (isMy ? "my-review" : "review"))
  }
  const onUpdateSubmit = async (data) => {
    const result = await updateReview(params.review_id, data, cookies["token"])
    if (!result) return
    history.replace("/dashboard/" + (isMy ? "my-review" : "review"))
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
    history.replace("/dashboard/" + (isMy ? "my-review" : "review"))
  }
  //
  if (!loaded) return <div />
  return (
    <ReviewAlterView
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
