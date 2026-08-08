import React from 'react'
import { Outlet } from 'react-router'
import SiteBackground from '../../shared/UI/pages/SiteBackground'

const AuthLayout = () => {
  return (
    <div>
      <SiteBackground />
      <Outlet />
    </div>
  )
}

export default AuthLayout
