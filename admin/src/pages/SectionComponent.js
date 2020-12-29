import { useParams } from "react-router-dom"
import TableComponent from "../components/SectionComponent/TableComponent"

const SectionComponent = () => {
  const section = useParams().section
  
  return <div>
    <TableComponent section={section}/>
  </div>
}

export default SectionComponent