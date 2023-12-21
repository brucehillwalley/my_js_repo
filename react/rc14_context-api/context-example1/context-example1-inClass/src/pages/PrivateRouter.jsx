import { Outlet, Navigate } from "react-router-dom"

const PrivateRouter = () => {
  //TODO: global state'den okunmali
  const user = true
  return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRouter
