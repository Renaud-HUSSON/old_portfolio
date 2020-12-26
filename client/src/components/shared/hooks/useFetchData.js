import { useEffect, useState } from "react"
import {Redirect} from 'react-router-dom'

/**
 * Fetches data from an url
 * 
 * @param {String} url - URL we want to fetch data from
 * @param {Object} [options] - Options to pass to fetch method
 */
const useFetchData = (url, options) => {
  const [data, setData] = useState({
    data: [],
    loading: true
  })
  
  useEffect(() => {
    (async () => {
      const headers = new Headers()
      headers.append('Authorization', `Bearer ${process.env.REACT_APP_PUBLIC_ACCESS_TOKEN}`)

      const data = await fetch(url, {
        headers: headers,
        ...options
      })
      const json = await data.json()

      if(json.redirect){
        return <Redirect to={json.redirect} />
      }
      
      setData({
        data: json,
        loading: false
      })
    })()
  }, [url, options])

  return data;
}

export default useFetchData