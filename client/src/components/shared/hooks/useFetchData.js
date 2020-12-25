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
      const data = await fetch(url, options)
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