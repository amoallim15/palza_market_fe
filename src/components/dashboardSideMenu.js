import React from "react"
import { styled } from "@mui/material/styles"
import { dashboardSideMenu } from "../services/menus"
import {
  ListItem,
  ListItemText,
  Collapse,
  List,
  Drawer,
  Toolbar,
  Divider,
  IconButton
} from "@mui/material"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"

function MenuItem({ item, onClick }) {
  const [open, setOpen] = React.useState(true)
  //
  switch (item.type) {
    case "group":
      return (
        <>
          <ListItem button onClick={() => setOpen(!open)}>
            <ListItemText primary={item.name} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map((item, index) => (
                <ListItem button key={index} sx={{ pl: 4 }} onClick={onClick}>
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </>
      )

    case "link":
    default:
      return (
        <ListItem button sx={{ pl: 4 }}>
          <ListItemText primary={item.name} />
        </ListItem>
      )
  }
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
  handleItemClick,
  handleDrawer,
  open
}) {
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
          <MenuItem
            key={index}
            item={item}
            onClick={(e) => handleItemClick(e, item)}
          />
        ))}
      </List>
      <Divider />
      {/*<List>{secondaryListItems}</List>*/}
    </CustomDrawer>
  )
}
