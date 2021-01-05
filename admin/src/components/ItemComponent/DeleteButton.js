import { useContext } from "react"
import { Button } from "react-bootstrap"
import { LoggedContext } from "../../contexts/Logged"
import d from "../../data"

const DeleteButton = ({section, id}) => {
  const [logged,] = useContext(LoggedContext)
  
  //Deletes the image if the section contains an image
  
  const handleClick = async () => {
    const url = `${d[section].url}/${id}`
    
    const headers = new Headers()
    headers.append('Authorization', `Bearer ${logged.token}`)

    if(d[section].hasOwnProperty('image')){
      const data = await fetch(url, {
        headers: headers        
      })

      const json = await data.json()

      headers.append('Content-Type', 'application/json')

      const deleteImage = await fetch('/images/delete', {
        headers: headers,
        method: 'DELETE',
        body: JSON.stringify({
          path: json.image
        })
      })

      const deleteJson = await deleteImage.json()

      console.log(deleteJson)
    }
    
    const data = await fetch(url, {
      method: 'DELETE',
      headers: headers
    })

    const json = await data.json()

    console.log(json)
  }
  
  return <Button onClick={handleClick} className="bg-danger border-0 my-1">Supprimer</Button>
}

export default DeleteButton