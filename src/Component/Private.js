import React from 'react'
import { Navigate , Outlet} from 'react-router-dom'
import Cookies from 'js-cookie'

function Private() {
    const auth = Cookies.get('admintoken')
  return (
   auth ? <Outlet/>: <Navigate to ="/login"/>
     )

    
}

export default Private
