import React from "react"
import { useFormContext } from "react-hook-form"
//
export default function Popup({
  url,
  name,
  opts,
  children,
  onInit,
  onEvent,
  disabled,
  ...props
}) {
  //
  const browser = window.self
  let popup = null
  let timer = null
  //
  React.useEffect(() => {
    browser[name] = {}
    browser[name].onSuccess = async (res) => {
      onEvent && (await onEvent("SUCCESS", res, null))
    }
    browser[name].onError = async (error) => {
      onEvent && (await onEvent("ERROR", null, error))
    }
    browser[name].onOpen = async () => {
      onEvent && (await onEvent("OPENED", { name: name }, null))
    }
    browser[name].onClose = async () => {
      onEvent && (await onEvent("CLOSED", { name: name }, null))
    }
  }, [onEvent, name, browser])
  //
  const watcher = () => {
    if (popup === null) {
      clearInterval(timer)
      timer = null
    } else if (popup !== null && !popup.closed) {
      popup.focus()
    } else if (popup !== null && popup.closed) {
      clearInterval(timer)
      browser.focus()
      browser[name].onClose()
      timer = null
      popup = null
    }
  }
  //
  const onClick = async (e) => {
    e.preventDefault()
    if (popup && !popup.closed) {
      popup.focus()
      return
    }
    onInit && (await onInit(e))
    popup = browser.open(url, name, opts)
    setTimeout(async () => {
      await popup.opener[name].onOpen()
    }, 0)
    if (timer === null) {
      timer = setInterval(watcher, 2000)
    }
    return
  }
  //
  return (
    <button {...props} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
//
export function FormPopup({
  name,
  validators,
  children,
  actionName,
  onInit,
  onEvent,
  ...props
}) {
  const [state, setState] = React.useState({
    disabled: false,
    preValue: null
  })
  const methods = useFormContext()
  //
  const { ...hiddenInputProps } = methods.register(name, validators)
  //
  const onPopupInit = async (e) => {
    e.preventDefault()
    if (!onInit) return
    const result = await onInit(e)
    if (result === false) return
    await setState({ ...state, preValue: result })
  }
  //
  const onPopupEvent = async (event, res, err) => {
    if (!onEvent) return
    if (event === "SUCCESS") {
      await setState({ disabled: true })
      await methods.setValue(name, res, { shouldValidate: true })
    }
    await onEvent(
      event,
      Object.assign({}, res, { preValue: state.preValue }),
      err
    )
  }
  //
  return (
    <div className="flex flex-row">
      <input type="hidden" {...hiddenInputProps} />
      <Popup
        name={name}
        disabled={state.disabled}
        onInit={onPopupInit}
        onEvent={onPopupEvent}
        {...props}
      >
        {children}
      </Popup>
    </div>
  )
}
