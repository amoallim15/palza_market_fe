import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./etc/reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import RoutesContainer, { Routes } from "./services/router"
import { AppContextProvider } from "./services/context"
import "./assets/assets"

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <RoutesContainer routes={Routes} />
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
