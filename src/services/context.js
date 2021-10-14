import React from "react"
//
const initialState = {
  appBarMenus: [[], []]
}
//
const AppContext = React.createContext(initialState)
//
export const AppContextProvider = ({ children }) => {
  const [appState, appDispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      //
      case "UpdateAppBarMenus":
        return { ...state, appBarMenus: action.payload }
      //
      default:
        return state
    }
  }, initialState)

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {children}
    </AppContext.Provider>
  )
}
//
export default AppContext
