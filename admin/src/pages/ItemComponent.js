import { useParams } from "react-router-dom"
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
    <ItemDecider item={item.data} section={section}/>
  </div>
  :<></>
}

export default ItemComponent