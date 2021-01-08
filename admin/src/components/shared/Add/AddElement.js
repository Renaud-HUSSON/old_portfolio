import FormComponent from "../Form/FormComponent"
import AddCompetence from "./AddCompetence"
import AddEndpoint from "./AddEndpoint"
import AddExperience from "./AddExperience"
import AddMethod from "./AddMethod"
import AddParcours from "./AddParcours"
import AddPerm from "./AddPerm"
import AddProjet from "./AddProjet"
import AddRole from "./AddRole"

const AddElement = ({section, sectionData, handleClose}) => {
  const componentDecider = () => {
    switch(section){
      case 'projets':
        return <AddProjet />
      case 'competences':
        return <AddCompetence />
      case 'parcours':
        return <AddParcours />
      case 'experiences':
        return <AddExperience />
      case 'endpoints':
        return <AddEndpoint />
      case 'roles':
        return <AddRole />
      case 'methods':
        return <AddMethod />
      case 'perms':
        return <AddPerm />
      default:
        return <p>Erreur</p>
    }
  }

  return <FormComponent url={sectionData.url} section={section} handleClose={handleClose}>
    {
      componentDecider()
    }
  </FormComponent>
}

export default AddElement