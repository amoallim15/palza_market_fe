import React from "react"
import { createReview, updateReview, getReview } from "../../services/api"
import ReviewAlterView from "../../views/dashboard/reviewAlterView"
import { useForm } from "react-hook-form"
import { useCookies } from "react-cookie"
import { useHistory, useParams } from "react-router-dom"
import Lang from "../../services/lang"
//
export default function ReviewAlter() {
  const [loaded, setLoaded] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)
  const history = useHistory()
  const [cookies] = useCookies()
  const params = useParams()
  const [mode, setMode] = React.useState({
    method: "",
    title: "",
    buttonLabel: ""
  })
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
      let result = null
      if (params.review_id) result = await getReview(params.review_id)
      //
      if (result) {
        await setMode({
          method: "UPDATE",
          title: Lang.updateReview,
          buttonLabel: Lang.update
        })
        await methods.reset(result)
      } else {
        await setMode({
          method: "CREATE",
          title: Lang.createReview,
          buttonLabel: Lang.create
        })
        history.replace("/dashboard/review/alter")
      }
      //
      await setLoaded(true)
    })()
  }, [history, params.review_id, methods])
  //
  const onCreateSubmit = async (data) => {
    const result = await createReview(data, cookies["token"])
    if (!result) return
    history.replace("/dashboard/my-review")
  }
  const onUpdateSubmit = async (data) => {
    const result = await updateReview(params.review_id, data, cookies["token"])
    if (!result) return
    history.replace("/dashboard/my-review")
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
    history.replace("/dashboard/my-review")
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
