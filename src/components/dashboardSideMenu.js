import React from "react"
import { styled } from "@mui/material/styles"
import { dashboardSideMenu } from "../services/menus"
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

function MenuItem({ item }) {
  const history = useHistory()
  //
  const onClick = (e) => {
    history.push(item.link)
  }
  //
  return (
    <>
      {item.divider && <Divider />}
      <ListItem button sx={{ pl: 4 }} onClick={onClick}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={item.name} />
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
export default function DashboardSideMenu({ handleDrawer, open }) {
  //
  return (
    <CustomDrawer variant="permanent" open={open}>
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
        {dashboardSideMenu.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </List>
    </CustomDrawer>
  )
}
