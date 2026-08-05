import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import PublicRoute from './ProtectedRoutes/PublicRoute'
import AuthLayout from '../app/Layouts/AuthLayout'
import LoginPage from '../features/auth/UI/pages/LoginPage'
import SignUpPage from '../features/auth/UI/pages/SignUpPage'
import { useDispatch } from 'react-redux'
import { ssrImportKey } from 'vite/module-runner'
import { hydrationUser } from '../features/auth/state/authThunk'
import MainRoute from './ProtectedRoutes/MainRoute'
import MainLayout from '../app/Layouts/MainLayout'


const AppRoutes = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        (async()=> {
            let token = localStorage.getItem('accessToken')
            try {
                dispatch(hydrationUser(token))
            } catch (error) {
                console.log(error)
            }
        })()
    }, [dispatch])

    const router = createBrowserRouter([
        {
            path: '/',
            element: <PublicRoute />,
            children: [
                {
                    path: '',
                    element: <AuthLayout />,
                    children: [
                        {
                        path: '',
                        element: <LoginPage />
                    },
                    {
                        path: 'signUp',
                        element: <SignUpPage />
                    }
                    ]
                }
            ]
        }, 
        {
            path: '/home',
            element: <MainRoute />,
            children: [
                {
                    path: '',
                    element: <MainLayout />
                }
            ]
        }
    ])

  return <RouterProvider router={router}/>
}

export default AppRoutes
