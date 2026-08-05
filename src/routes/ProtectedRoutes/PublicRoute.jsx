import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router'

const PublicRoute = () => {
  
  let {user, isLoading} = useSelector(store => store.auth)
  console.log(user)

  if(isLoading) return <h1>Loading...</h1>

  if(user) return <Navigate to={'/home'} />


  return <Outlet />
}

export default PublicRoute
