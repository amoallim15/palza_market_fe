import React from "react"
import { styled } from "@mui/material/styles"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Button
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import EN from "../services/lang"
import MessageIcon from "@mui/icons-material/Message"
import { useHistory } from "react-router-dom"
import AppContext from "../services/context"

const drawerWidth = 240

const CustomAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const SMSMessageCount = ({ count }) => {
  return (
    <IconButton color="inherit">
      <Badge badgeContent={count || 0} color="secondary">
        <MessageIcon />
      </Badge>
    </IconButton>
  )
}

export default function DashboardAppBar({ title, open, handleDrawer }) {
  const history = useHistory()
  const { appState } = React.useContext(AppContext)
  //
  return (
    <CustomAppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: "24px" // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" })
          }}
        >
          <MenuIcon />
        </IconButton>
        {/**/}
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {title || EN.dashboard}
        </Typography>
        {/**/}
        <Button
          onClick={() => history.push("/")}
          variant="button"
          sx={{ my: 1, mx: 1.5 }}
        >
          {EN.home}
        </Button>
        {/**/}
        {appState.currentUser &&
          appState.currentUser.user_role !== "CLIENT" && <SMSMessageCount />}
      </Toolbar>
    </CustomAppBar>
  )
}
