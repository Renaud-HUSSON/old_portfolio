import { createContext, useState } from "react";

export const FlashContext = createContext()

export const FlashProvider = ({children}) => {
  const [data, setData] = useState({
    active: false,
  })
  
  return <FlashContext.Provider value={[data, setData]}>
    {children}
  </FlashContext.Provider>
}