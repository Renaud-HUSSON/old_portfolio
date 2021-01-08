import { createContext, useState } from "react"
import AlertComponent from "../components/shared/AlertComponent"

export const AlertContext = createContext()

export const AlertProvider = ({children}) => {
  const [alert, setAlert] = useState({
    active: false
  })
  
  return <AlertContext.Provider value={[alert, setAlert]}>
    {
      alert.active
      ?<AlertComponent />
      :<></>
    }
    {children}
  </AlertContext.Provider>
}