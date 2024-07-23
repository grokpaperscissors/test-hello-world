import * as React from "react"
import Header from "./header"
import { GlobalStyle } from "./styles/globalStyles"
import  Footer  from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle/>
      <Header/>
        <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout
