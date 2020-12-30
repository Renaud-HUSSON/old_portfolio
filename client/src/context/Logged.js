import { createContext, useEffect, useState } from "react";

export const LoggedContext = createContext()

export const LoggedProvider = ({children}) => {
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    (async () => {
      const headers = new Headers()
      headers.append('authorization', `Bearer ${process.env.REACT_APP_PUBLIC_ACCESS_TOKEN}`)
      
      const isLogged = await fetch('/auth/logged', {
        headers: headers
      })
      const json = await isLogged.json()
      
      //Generates an access token if the user is connected
      if(json){
        fetch('/auth/token', {
          headers: headers
        })
      }

      setLogged(json)
    })()
  }, [setLogged])

  return <LoggedContext.Provider value={[logged, setLogged]}>
    {children}
  </LoggedContext.Provider>
}