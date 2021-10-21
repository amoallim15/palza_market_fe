import React from "react"
import {
  createFranchise,
  updateFranchise,
  getFranchise,
  uploadImage
} from "../../services/api"
import FranchiseAlterView from "../../views/dashboard/franchiseAlterView"
import { useForm } from "react-hook-form"
import { useCookies } from "react-cookie"
import { useHistory, useParams } from "react-router-dom"
import Lang from "../../services/lang"
//
export default function FranchiseAlter() {
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
      if (params.franchise_id) result = await getFranchise(params.franchise_id)
      //
      if (result) {
        await setMode({
          method: "UPDATE",
          title: Lang.updateFranchise,
          buttonLabel: Lang.update
        })
        await methods.reset(result)
      } else {
        await setMode({
          method: "CREATE",
          title: Lang.createFranchise,
          buttonLabel: Lang.create
        })
        history.replace("/dashboard/franchise/alter")
      }
      //
      await setLoaded(true)
    })()
  }, [history, params.franchise_id, methods])
  //
  const onCreateSubmit = async (data) => {
    const result = await createFranchise(data, cookies["token"])
    if (!result) return
    history.replace("/dashboard/franchise")
  }
  const onUpdateSubmit = async (data) => {
    const result = await updateFranchise(
      params.franchise_id,
      data,
      cookies["token"]
    )
    if (!result) return
    history.replace("/dashboard/franchise")
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
    history.replace("/dashboard/notice")
  }
  //
  const onImageUpload = async (file) => {
    return uploadImage(file)
  }
  //
  const onImageChange = async (value) => {
    await methods.setValue("thumbnail_url", value)
  }
  //
  if (!loaded) return <div />
  return (
    <FranchiseAlterView
      methods={methods}
      disabled={disabled}
      setDisabled={setDisabled}
      onActionCallback={onActionCallback}
      onValidateCallback={onValidateCallback}
      onCancelActionCallback={onCancelActionCallback}
      onImageUpload={onImageUpload}
      onImageChange={onImageChange}
      mode={mode}
    />
  )
}
