import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate} from 'react-router'
import SkyMartAppLoader from '../../shared/UI/components/Loading'

const MainRoute = () => {
  
  let {user, isLoading} = useSelector(store => store.auth)
  
  if (isLoading) return <SkyMartAppLoader />

  if(!user) return <Navigate to={'/'} /> 
    
  return <Outlet />
}

export default MainRoute
