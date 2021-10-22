import React from "react"
import {
  createMagazine,
  updateMagazine,
  getMagazine,
  uploadImage
} from "../../services/api"
import MagazineAlterView from "../../views/dashboard/magazineAlterView"
import { useForm } from "react-hook-form"
import { useCookies } from "react-cookie"
import { useHistory, useParams } from "react-router-dom"
import Lang from "../../services/lang"
import AppContext from "../../services/context"
//
export default function MagazineAlter() {
  const [loaded, setLoaded] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)
  const { appState } = React.useContext(AppContext)
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
      if (!["ADMIN", "EMPLOYEE"].includes(appState.currentUser.user_role))
        history.replace("/dashboard/profile")
      //
      let result = null
      if (params.magazine_id) result = await getMagazine(params.magazine_id)
      //
      if (result) {
        await setMode({
          method: "UPDATE",
          title: Lang.updateMagazine,
          buttonLabel: Lang.update
        })
        await methods.reset(result)
      } else {
        await setMode({
          method: "CREATE",
          title: Lang.createMagazine,
          buttonLabel: Lang.create
        })
        history.replace("/dashboard/magazine/alter")
      }
      //
      await setLoaded(true)
    })()
  }, [history, params.magazine_id, methods, appState.currentUser.user_role])
  //
  const onCreateSubmit = async (data) => {
    const result = await createMagazine(data, cookies["token"])
    if (!result) return
    history.replace("/dashboard/magazine")
  }
  const onUpdateSubmit = async (data) => {
    const result = await updateMagazine(
      params.magazine_id,
      data,
      cookies["token"]
    )
    if (!result) return
    history.replace("/dashboard/magazine")
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
    history.replace("/dashboard/magazine")
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
    <MagazineAlterView
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
