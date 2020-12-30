import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"
import useFetchData from '../shared/hooks/useFetchData'
import Loading from "../shared/Loading"
import { v4 as uuidv4 } from 'uuid';

const TableComponent = ({section, sectionData}) => {
  const data = useFetchData(`${sectionData.url}`)
  
  return !data.loading && data.data.length !== 0
  ?<Table responsive="lg" striped bordered hover>
  <thead>
    <tr>
      {
        //Displaying all table properties in the table header
        Object.keys(data.data[0]).map(element => {
          return <th key={uuidv4()}>{element}</th>
        })
      }
    </tr>
  </thead>
  <tbody>
    {
      data.data.map((row) => {
        return <tr key={row.id}>
            {
              Object.values(row).map(property => {
                return <td key={uuidv4()}>
                  <Link className="text-dark" to={`/admin/${section}/${row.id}`}>
                    {property}
                  </Link>
                </td>
              })
            }
          </tr>
      })
    }
  </tbody>
  </Table>
  :<Loading />
}

export default TableComponent