import FormComponent from "../Form/FormComponent"
import AddProjet from "./AddProjet"

const AddElement = ({section}) => {
  const componentDecider = () => {
    switch(section){
      case 'projets':
        return <AddProjet />
      default:
        return <p>Erreur</p>
    }
  }

  return <FormComponent>
    {
      componentDecider()
    }
  </FormComponent>
}

export default AddElement