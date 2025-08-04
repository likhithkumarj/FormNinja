import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoutes = () => {
    const user = null 
    return user ? <Outlet /> : <Navigate to="/login" />
}

const AuthRoute = () => {
    const user = null
    return user ? <Navigate to="/home" /> : <Outlet />
}

export { ProtectedRoutes, AuthRoute }