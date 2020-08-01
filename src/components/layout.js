import React from "react"
import "./layout.css"
import NavBar from "./main/navbar"

const Layout = (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  )
}

export default Layout