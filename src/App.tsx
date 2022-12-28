import React from "react"
import Routes from "./routes"
import Global from "./styles/globalStyle"
import UserProvider from "./contexts/UserContext"

function App() {
  return (
    <>
      <Global/>

      <UserProvider>
        <Routes/>
      </UserProvider>
    </>
  )
}

export default App
