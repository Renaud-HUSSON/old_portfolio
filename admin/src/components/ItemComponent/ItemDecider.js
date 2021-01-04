import { useEffect } from "react"
import data from "../../data"
import FormComponent from "../shared/Form/FormComponent"
import UpdateCompetence from "../shared/Update/UpdateCompetence"
import UpdateExperience from "../shared/Update/UpdateExperience"
import UpdateParcours from "../shared/Update/UpdateParcours"
import UpdateProjet from "../shared/Update/UpdateProjet"

const ItemDecider = ({section, item}) => {
  const decider = () => {
    switch(section){
      case 'projets':
        return <UpdateProjet item={item}/>
      case 'competences':
        return <UpdateCompetence item={item}/>
      case 'parcours':
        return <UpdateParcours item={item}/>
      case 'experiences':
        return <UpdateExperience item={item}/>
      default:
        <p>Erreur</p>
    }
  }

  return <FormComponent defaultValue={item} url={data[section].url} section={section} update={true}>
    {decider()}
  </FormComponent>
}

export default ItemDecider