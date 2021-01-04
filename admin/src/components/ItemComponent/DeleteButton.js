import { useContext } from "react"
import { Button } from "react-bootstrap"
import { LoggedContext } from "../../contexts/Logged"
import d from "../../data"

const DeleteButton = ({section, id}) => {
  const [logged,] = useContext(LoggedContext)
  
  const handleClick = async () => {
    
    const url = `${d[section].url}/${id}`

    const headers = new Headers()
    headers.append('Authorization', `Bearer ${logged.token}`)

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