import { createContext, useEffect, useState } from "react";
import useFetchData from "../components/shared/hooks/useFetchData";

export const LoggedContext = createContext()

export const LoggedProvider = ({children}) => {
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    (async () => {
      const isLogged = await fetch('/auth/logged')
      const json = await isLogged.json()

      //Generates an access token if the user is connected
      if(json){
        fetch('/auth/token')
      }

      setLogged(json)
    })()
  }, [setLogged])

  return <LoggedContext.Provider value={[logged, setLogged]}>
    {children}
  </LoggedContext.Provider>
}