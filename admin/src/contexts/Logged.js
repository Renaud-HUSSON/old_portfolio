import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cookies from 'js-cookie'

export const LoggedContext = createContext()

export const LoggedProvider = ({children}) => {
  const location = useLocation()
  const [logged, setLogged] = useState()

  useEffect(() => {
    (async () => {
      const isLogged = await fetch('/auth/logged')
      const json = await isLogged.json()

      //Generates an access token if the user is connected
      if(json){
        fetch('/auth/token')
      }

      const token = json ?  Cookies.get('access_token') : undefined
      
      setLogged({
        logged: json,
        token: token
      })
    })()
  }, [setLogged, location.pathname])

  return <LoggedContext.Provider value={[logged, setLogged]}>
    {children}
  </LoggedContext.Provider>
}