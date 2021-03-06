import React from "react"
import { styled } from "@mui/material/styles"
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  List,
  Drawer,
  Toolbar,
  Divider,
  IconButton
} from "@mui/material"
import DashboardIcon from "@mui/icons-material/Dashboard"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import { useHistory } from "react-router-dom"
import Lang from "../services/lang"

function MenuItem({ name, link, divider }) {
  const history = useHistory()
  //
  return (
    <>
      {divider && <Divider />}
      <ListItem button sx={{ pl: 4 }} onClick={() => history.push(link)}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </>
  )
}
//
const drawerWidth = 240
//
const CustomDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9)
      }
    })
  }
}))
//
export default function DashboardSideMenu({
  handleDrawer,
  drawerOpen,
  userRole,
  userType
}) {
  //
  return (
    <CustomDrawer variant="permanent" open={drawerOpen}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1]
        }}
      >
        <IconButton onClick={handleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {/**/}
        <MenuItem name={Lang.profile} link="/dashboard/profile" />
        {/**/}
        {userType === "INDIVIDUAL" && (
          <>
            <MenuItem name={Lang.myWishlist} link="/dashboard/my-wishlist" />
            <MenuItem name={Lang.myReviews} link="/dashboard/my-review" />
            <MenuItem name={Lang.myReports} link="/dashboard/my-report" />
            <Divider />
          </>
        )}
        {/**/}
        {userType === "AGENCY" && (
          <>
            <MenuItem name={Lang.myRealstates} link="/dashboard/my-realstate" />
            <MenuItem name={Lang.requests} link="/dashboard/requests" />
            <Divider />
          </>
        )}
        {/**/}
        {["ADMIN", "EMPLOYEE"].includes(userRole) && (
          <>
            <MenuItem name={Lang.realstates} link="/dashboard/realstate" />
            <MenuItem name={Lang.notices} link="/dashboard/notice" />
            <MenuItem name={Lang.franchises} link="/dashboard/franchise" />
            <MenuItem name={Lang.magazines} link="/dashboard/magazine" />
            <MenuItem name={Lang.reviews} link="/dashboard/review" />
            <MenuItem name={Lang.reports} link="/dashboard/report" />
            <MenuItem name={Lang.crontabs} link="/dashboard/crontab" />
            <MenuItem name={Lang.smsMessages} link="/dashboard/sms" />
            <Divider />
          </>
        )}
        {/**/}
        {userRole === "ADMIN" && (
          <>
            <MenuItem name={Lang.settings} link="/dashboard/settings" />
            <Divider />
          </>
        )}
        {/**/}
        <MenuItem name={Lang.signOut} link="/sign-out" />
      </List>
    </CustomDrawer>
  )
}
