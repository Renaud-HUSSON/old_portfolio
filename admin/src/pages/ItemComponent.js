import { Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import DeleteButton from "../components/ItemComponent/DeleteButton"
import ItemDecider from "../components/ItemComponent/ItemDecider"
import useFetchData from "../components/shared/hooks/useFetchData"
import data from "../data"

const ItemComponent = () => {
  const params = useParams()
  const section = params.section
  const id = params.id

  const item = useFetchData(`${data[section].url}/${id}`)

  return !data.loading
  ?<div className="m-4">
    <div className="d-md-flex justify-content-between">
      <h1>{section[0].toUpperCase().concat(section.slice(1).toLowerCase())}</h1>
      <DeleteButton section={section} id={id}/>
    </div>
    <ItemDecider item={item.data} section={section}/>
  </div>
  :<></>
}

export default ItemComponent