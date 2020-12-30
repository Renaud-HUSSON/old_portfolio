import { useContext, useEffect, useState } from "react"
import {Redirect} from 'react-router-dom'
import { LoggedContext } from "../../../contexts/Logged"

/**
 * Fetches data from an url
 * 
 * @param {String} url - URL we want to fetch data from
 * 
 */
const useFetchData = (url) => {
  const [logged,] = useContext(LoggedContext)
  
  const [data, setData] = useState({
    data: [],
    loading: true
  })
  
  useEffect(() => {
    (async () => {
      const headers = new Headers()
      headers.append('Authorization', `Bearer ${logged.token}`)

      const data = await fetch(url, {
        headers: headers
      })
      
      const json = await data.json()
      
      setData({
        data: json,
        loading: false
      })
    })()
  }, [url])

  return data;
}

export default useFetchData