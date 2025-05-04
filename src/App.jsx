import React from "react"
import Header from "./components/Header"
import Home_page from "./components/Home_page"
import UseBodyBackground from "./UseBodyBackground"


const App = () => {
  UseBodyBackground();
  return (
    <>
      <Header/>
      <Home_page/>
    </>
  )
}
export default App
