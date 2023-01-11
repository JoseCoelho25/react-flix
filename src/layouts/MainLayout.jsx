import Footer from "../components/MainFooter";
import React from 'react'
import NavBar from '../components/NavBar'

function MainLayout({children}) {
  return (
    <div className="MainLayout">
        <NavBar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default MainLayout