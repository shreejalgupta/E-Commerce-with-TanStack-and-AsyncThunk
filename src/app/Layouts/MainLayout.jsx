import React from 'react'
import Navbar from '../../shared/UI/components/Navbar'
import { Outlet } from 'react-router'
import SiteBackground from '../../shared/UI/pages/SiteBackground'
import Footer from '../../shared/UI/components/Footer'

const MainLayout = () => {
  return (
    <div>
      <SiteBackground />
      <Navbar />
      <div className='w-full h-fit '>
      <Outlet />

      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
