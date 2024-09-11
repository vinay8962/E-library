import React from 'react'
import Cookies from 'js-cookie'
import { Outlet, Navigate } from 'react-router-dom'
function Privateuser() {
    const user = Cookies.get('useretoken')
    return (
        user ? <Outlet /> : <Navigate to="/login" />
    )

}

export default Privateuser
