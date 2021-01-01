import InputComponent from "../Form/InputComponent"

const AddExperience = ({setData}) => {
  return <>
    <InputComponent label="Date" name="date" setData={setData}/>
    <InputComponent label="Nom" name="nom" setData={setData}/>
  </>
}

export default AddExperience