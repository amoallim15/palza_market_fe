import React from "react"
import TabPanel from "../components/tabPanel"
import { Box, Tabs, Tab, Typography } from "@mui/material"
import Lang from "../services/lang"
import InfoView from "./profile/infoView"
import PwdView from "./profile/pwdView"
//
export default function ProfileView({
  currentTab,
  onTabChange,
  infoMethods,
  onInfoActionClick,
  onInfoSubmit,
  infoMode,
  pwdMethods,
  onPwdActionClick,
  onPwdSubmit,
  pwdMode,
  isAgency
}) {
  //
  return (
    <Box>
      <Typography
        component="h2"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1, mb: 3 }}
      >
        {Lang.profile}
      </Typography>
      <Tabs value={currentTab} onChange={onTabChange}>
        <Tab label={Lang.info} />
        <Tab label={Lang.changePassword} />
      </Tabs>
      {/**/}
      <TabPanel value={currentTab} index={0}>
        <InfoView
          methods={infoMethods}
          onActionClick={onInfoActionClick}
          onSubmit={onInfoSubmit}
          mode={infoMode}
          isAgency={isAgency}
        />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <PwdView
          methods={pwdMethods}
          onActionClick={onPwdActionClick}
          onSubmit={onPwdSubmit}
          mode={pwdMode}
        />
      </TabPanel>
    </Box>
  )
}
