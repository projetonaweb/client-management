import { useRoutes } from "react-router-dom"
import NotFound from "../pages/Error/NotFound"
import Home from "../pages/Home/Home"
import SingUp from "../pages/Register/SingUp"
import { SingIn } from "../pages/SingIn/SingIn"
import { RequireAuth } from "./RequireAuth"
import PanelClients from "../pages/PanelClients/PanelClients"
import Client from "../pages/Client/Client"

export const RouteList = () => {
  return useRoutes([
    { path: '/', element: <RequireAuth><Home /></RequireAuth>},
    { path: '/clients', element: <RequireAuth><PanelClients /></RequireAuth>},
    { path: '/clients/:id', element: <RequireAuth><Client /></RequireAuth>},
    { path: '/login', element: <SingIn /> },
    { path: '/register', element: <SingUp /> },
    { path: '*', element: <NotFound /> }
  ])
}