import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header />
        {/* by declaring Outlet in between Header and Footer we ensure that When we load any page Header and Footer will be same but the content between them will change dynamically */}
        <Outlet /> 
        <Footer />
    </>
  )
}

export default Layout
