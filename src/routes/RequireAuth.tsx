import { Navigate } from "react-router-dom"

type Props = {
  children: JSX.Element
}

export const RequireAuth = ({ children }: Props) => {
  const isAuth = true

  if(!isAuth) {
    return <Navigate to="/login"/>
  } 
  
  return children
}