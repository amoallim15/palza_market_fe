import React from "react"
import { Box, Tabs, Tab, Typography } from "@mui/material"
import TabPanel from "../../components/tabPanel"
import Lang from "../../services/lang"
import NoticeListView from "./noticeListView"
import NoticeCategoryView from "./noticeCategoryView"
//
export default function NoticeView({
  currentTab,
  onTabChange,
  noticeData,
  noticeCategoryData,
  noticeCategoryMap,
  onNoticeCreateClick,
  onNoticeEditClick,
  onNoticeDeleteClick,
  onPageChange
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
        {Lang.notices}
      </Typography>
      <Tabs value={currentTab} onChange={onTabChange}>
        <Tab label={Lang.notices} />
        <Tab label={Lang.categories} />
      </Tabs>
      <TabPanel value={currentTab} index={0}>
        <NoticeListView
          noticeData={noticeData}
          noticeCategoryMap={noticeCategoryMap}
          onCreateClick={onNoticeCreateClick}
          onEditClick={onNoticeEditClick}
          onDeleteClick={onNoticeDeleteClick}
          onPageChange={onPageChange}
        />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <NoticeCategoryView noticeCategoryData={noticeCategoryData} />
      </TabPanel>
    </Box>
  )
}
