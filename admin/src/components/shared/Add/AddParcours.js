import InputComponent from "../Form/InputComponent"

const AddParcours = ({setData}) => {
  return <>
    <InputComponent label="Date" name="date" setData={setData}/>
    <InputComponent label="Nom" name="name" setData={setData}/>
  </>
}

export default AddParcours