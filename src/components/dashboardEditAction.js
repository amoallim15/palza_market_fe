import React from "react"
import { Grid, Button, CircularProgress } from "@mui/material"
import Lang from "../services/lang"

export default function DashboardEditAction({
  setDisabled,
  actionCallback,
  validateCallback,
  resetCallback,
  children
}) {
  const [mode, setMode] = React.useState({
    actionButtonLabel: Lang.edit,
    actionButtonDisabled: false,
    cancelButtonDisabled: true,
    editing: false
  })
  //
  const onActionClick = async (e) => {
    if (mode.editing === false) {
      await setDisabled(false)
      await setMode({
        actionButtonLabel: Lang.save,
        editing: true,
        actionButtonDisabled: false,
        cancelButtonDisabled: false
      })
    } else if (mode.editing === true) {
      if (!(await validateCallback())) return
      await setDisabled(true)
      await setMode({
        actionButtonLabel: Lang.pending,
        editing: null,
        actionButtonDisabled: true,
        cancelButtonDisabled: true
      })
      await actionCallback()
      window.setTimeout(async () => {
        await setDisabled(true)
        await setMode({
          actionButtonLabel: Lang.edit,
          editing: false,
          actionButtonDisabled: false,
          cancelButtonDisabled: true
        })
      }, 1000)
    } else {
      return
    }
  }
  //
  const onCancelActionClick = async (e) => {
    resetCallback && (await resetCallback())
    await setDisabled(true)
    await setMode({
      actionButtonLabel: Lang.edit,
      actionButtonDisabled: false,
      cancelButtonDisabled: true,
      editing: false
    })
  }
  //
  return (
    <Grid item xs={12} sx={{ flexDirection: "row-reverse", display: "flex" }}>
      <Button
        onClick={onActionClick}
        variant="contained"
        sx={{ my: 1, ml: 1.5 }}
        disabled={mode.actionButtonDisabled}
      >
        {mode.actionButtonLabel}
        {mode.editing === null && (
          <CircularProgress
            size={24}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px"
            }}
          />
        )}
      </Button>
      <Button
        onClick={onCancelActionClick}
        variant="contained"
        sx={{ my: 1, ml: 1.5 }}
        disabled={mode.cancelButtonDisabled}
      >
        {Lang.cancel}
      </Button>
      {children}
    </Grid>
  )
}
