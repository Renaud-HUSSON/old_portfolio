import { useEffect } from "react"
import data from "../../data"
import FormComponent from "../shared/Form/FormComponent"
import UpdateCompetence from "../shared/Update/UpdateCompetence"
import UpdateEndpoint from "../shared/Update/UpdateEndpoint"
import UpdateExperience from "../shared/Update/UpdateExperience"
import UpdateMethod from "../shared/Update/UpdateMethod"
import UpdateParcours from "../shared/Update/UpdateParcours"
import UpdatePerm from "../shared/Update/UpdatePerm"
import UpdateProjet from "../shared/Update/UpdateProjet"
import UpdateRole from "../shared/Update/UpdateRole"

const ItemDecider = ({item, section}) => {
  const decider = () => {
    switch(section){
      case 'projets':
        return <UpdateProjet/>
      case 'competences':
        return <UpdateCompetence/>
      case 'parcours':
        return <UpdateParcours/>
      case 'experiences':
        return <UpdateExperience/>
      case 'endpoints':
        return <UpdateEndpoint/>
      case 'roles':
        return <UpdateRole/>
      case 'methods':
        return <UpdateMethod/>
      case 'perms':
        return <UpdatePerm/>
      default:
        <p>Erreur</p>
    }
  }

  return <FormComponent defaultValue={item} url={data[section].url} section={section} update={true}>
    {decider()}
  </FormComponent>
}

export default ItemDecider