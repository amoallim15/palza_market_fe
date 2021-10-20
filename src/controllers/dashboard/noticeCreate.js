import React from "react"
import AppContext from "../../services/context"
import {
  getNoticeCategories,
  createNotice,
  uploadImage
} from "../../services/api"
import NoticeCreateView from "../../views/dashboard/noticeCreateView"
import { useForm } from "react-hook-form"
import { useCookies } from "react-cookie"
import { useHistory } from "react-router-dom"
//
export default function NoticeCreate() {
  const [loaded, setLoaded] = React.useState(false)
  const { appState, appDispatch } = React.useContext(AppContext)
  const [disabled, setDisabled] = React.useState(false)
  const history = useHistory()
  const [noticeCategoryData, setNoticeCategoryData] = React.useState({
    page: 0,
    count: 0,
    data: []
  })
  const [cookies] = useCookies()
  //
  const methods = useForm({
    criteriaMode: "all",
    mode: "onSubmit",
    defaultValues: {}
  })
  methods.register("category_id", { required: true })
  //
  const onSubmit = async (data) => {
    const result = await createNotice(data, cookies["token"])
    if (!result) return
  }
  //
  React.useEffect(() => {
    ;(async () => {
      if (appState.noticeCategories.length < 0) {
        let result = await getNoticeCategories()
        if (result) {
          await setNoticeCategoryData(result)
          appDispatch({ type: "UpdateNoticeCategories", payload: result.data })
        }
      }
      await setLoaded(true)
    })()
  }, [appDispatch, appState.noticeCategories])
  //
  const onActionCallback = async (e) => {
    await methods.handleSubmit(onSubmit)()
  }
  //
  const onValidateCallback = async () => {
    return await methods.trigger()
  }
  //
  const onDoneCallback = async () => {
    history.replace("/dashboard/notice")
  }
  //
  const onCancelActionCallback = async (e) => {
    history.replace("/dashboard/notice")
  }
  //
  const onSelectCategory = async (e) => {
    await methods.setValues("category_id", e.target.value, {
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
    <NoticeCreateView
      noticeCategoryData={noticeCategoryData}
      methods={methods}
      disabled={disabled}
      setDisabled={setDisabled}
      onActionCallback={onActionCallback}
      onValidateCallback={onValidateCallback}
      onDoneCallback={onDoneCallback}
      onSelectCategory={onSelectCategory}
      onCancelActionCallback={onCancelActionCallback}
      onImageUpload={onImageUpload}
      onImageChange={onImageChange}
    />
  )
}
