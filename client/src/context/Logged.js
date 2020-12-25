import { createContext, useEffect, useState } from "react";
import useFetchData from "../components/shared/hooks/useFetchData";

export const LoggedContext = createContext()

export const LoggedProvider = ({children}) => {
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    (async () => {
      const isLogged = await fetch('/auth/logged')
      const json = await isLogged.json()

      setLogged(json)
    })()
  }, [setLogged])

  console.log(logged)
  
  return <LoggedContext.Provider value={[logged, setLogged]}>
    {children}
  </LoggedContext.Provider>
}