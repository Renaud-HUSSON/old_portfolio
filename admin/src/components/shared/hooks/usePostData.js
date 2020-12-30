import { useContext, useEffect, useState } from "react"
import {Redirect} from 'react-router-dom'
import {LoggedContext} from '../../../contexts/Logged'

/**
 * Posts data to an api
 * 
 * @param {String} url - URL we want to fetch data from
 * @param {Object} options - Options we want to send
 * 
 */
const usePostData = (url, options) => {
  const [logged, ] = useContext(LoggedContext)
  
  const [data, setData] = useState({
    data: [],
    loading: true
  })
  
  useEffect(() => {
    (async () => {
      const headers = new Headers()
      headers.append('Authorization', `Bearer ${logged.token}`)
      headers.append('Content-Type', 'application/json')

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
  }, [url, options, logged.token])

  return data;
}

export default usePostData