import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate} from 'react-router'

const MainRoute = () => {
  const navigate = useNavigate();
  let {user, isLoading} = useSelector(store => store.auth)

  if (isLoading) return <h1>Loading...</h1>

  if(!user) return navigate('/home') 
  return <Outlet />
}

export default MainRoute
