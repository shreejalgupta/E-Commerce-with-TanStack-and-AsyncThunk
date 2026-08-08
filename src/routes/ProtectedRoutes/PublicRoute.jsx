import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet} from 'react-router'
import SkyMartAppLoader from '../../shared/UI/components/Loading';

const PublicRoute = () => {
  
  let {user, isLoading} = useSelector(store => store.auth)



  if(isLoading) return <SkyMartAppLoader />

  if(user) return <Navigate to={'/home'} />


  return <Outlet />
}

export default PublicRoute
