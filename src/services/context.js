import React from "react"
//
const initialState = {}
//
const AppContext = React.createContext(initialState)
//
export const AppContextProvider = ({ children }) => {
  const [appState, appDispatch] = React.useReducer((state, action) => {
    switch (action.type) {
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
