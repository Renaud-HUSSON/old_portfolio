import FormComponent from "../Form/FormComponent"
import AddCompetence from "./AddCompetence"
import AddExperience from "./AddExperience"
import AddParcours from "./AddParcours"
import AddProjet from "./AddProjet"

const AddElement = ({section, sectionData}) => {
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
      default:
        return <p>Erreur</p>
    }
  }

  return <FormComponent url={sectionData.url}>
    {
      componentDecider()
    }
  </FormComponent>
}

export default AddElement