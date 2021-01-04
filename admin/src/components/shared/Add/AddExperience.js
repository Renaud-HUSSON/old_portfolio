import InputComponent from "../Form/InputComponent"

const AddExperience = ({setData, data}) => {
  return <>
    <InputComponent data={data} label="Date" name="date" setData={setData}/>
    <InputComponent data={data} label="Nom" name="name" setData={setData}/>
  </>
}

export default AddExperience