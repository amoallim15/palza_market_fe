import React from "react"
import AppContext from "../../services/context"
import {
  getNoticeCategories,
  createNotice,
  updateNotice,
  getNotice,
  uploadImage
} from "../../services/api"
import NoticeAlterView from "../../views/dashboard/noticeAlterView"
import { useForm } from "react-hook-form"
import { useCookies } from "react-cookie"
import { useHistory, useParams } from "react-router-dom"
import Lang from "../../services/lang"
//
export default function NoticeAlter() {
  const [loaded, setLoaded] = React.useState(false)
  const { appState, appDispatch } = React.useContext(AppContext)
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
  methods.register("category_id", { required: true })
  methods.register("thumbnail_url", { required: true })
  //
  const onCreateSubmit = async (data) => {
    const result = await createNotice(data, cookies["token"])
    if (!result) return
    history.replace("/dashboard/notice")
  }
  const onUpdateSubmit = async (data) => {
    const result = await updateNotice(params.notice_id, data, cookies["token"])
    if (!result) return
    history.replace("/dashboard/notice")
  }
  //
  React.useEffect(() => {
    ;(async () => {
      //
      let result = null
      if (params.notice_id) result = await getNotice(params.notice_id)
      //
      if (result) {
        await setMode({
          method: "UPDATE",
          title: Lang.updateNotice,
          buttonLabel: Lang.update
        })
        await methods.reset(result)
      } else {
        await setMode({
          method: "CREATE",
          title: Lang.createNotice,
          buttonLabel: Lang.create
        })
        history.replace("/dashboard/notice/alter")
      }
      //
      if (appState.noticeCategories.length === 0) {
        let result = await getNoticeCategories()
        if (result) {
          appDispatch({ type: "UpdateNoticeCategories", payload: result.data })
        }
      }
      await setLoaded(true)
    })()
  }, [
    appDispatch,
    appState.noticeCategories,
    history,
    params.notice_id,
    methods
  ])
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
  const onSelectCategory = async (e) => {
    await methods.setValue("category_id", e.target.value, {
      shouldValidate: true
    })
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
    <NoticeAlterView
      noticeCategoryData={appState.noticeCategories}
      methods={methods}
      disabled={disabled}
      setDisabled={setDisabled}
      onActionCallback={onActionCallback}
      onValidateCallback={onValidateCallback}
      onSelectCategory={onSelectCategory}
      onCancelActionCallback={onCancelActionCallback}
      onImageUpload={onImageUpload}
      onImageChange={onImageChange}
      mode={mode}
    />
  )
}
