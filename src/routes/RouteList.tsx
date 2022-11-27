import { useRoutes } from "react-router-dom"
import App from "../App"
import Clients from "../pages/Clients/Clients"
import NotFound from "../pages/Error/NotFound"
import Home from "../pages/Home/Home"
import SingUp from "../pages/Register/SingUp"
import { SingIn } from "../pages/SingIn/SingIn"
import { RequireAuth } from "./RequireAuth"


export const RouteList = () => {
  return useRoutes([
    { path: '/', element: <RequireAuth><Home /></RequireAuth>},
    { path: '/clients', element: <RequireAuth><Clients /></RequireAuth>},
    { path: '/login', element: <SingIn /> },
    { path: '/register', element: <SingUp /> },
    { path: '*', element: <NotFound /> }
  ])
}