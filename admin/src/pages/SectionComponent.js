import { useParams } from "react-router-dom"
import AddElementModal from "../components/SectionComponent/AddElementModal"
import TableComponent from "../components/SectionComponent/TableComponent"
import data from '../data.js'

const SectionComponent = () => {
  const section = useParams().section
  
  return <div className="m-4">
    <div className="d-flex justify-content-between">
      <h1>{section[0].toUpperCase().concat(section.slice(1).toLowerCase())}</h1>
      <AddElementModal section={section} sectionData={data[section]}/>
    </div>
    <TableComponent section={section} sectionData={data[section]}/>
  </div>
}

export default SectionComponent