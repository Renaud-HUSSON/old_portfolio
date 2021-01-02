import FileInputComponent from "../Form/FileInputComponent"
import InputComponent from "../Form/InputComponent"

const AddCompetence = ({setData, setFile}) => {
  return <>
    <InputComponent label="Nom" name="name" setData={setData}/>
    <InputComponent label="Type (langage ou autre)" name="type" setData={setData}/>
    <FileInputComponent label="Image" name="image" setData={setData} setFile={setFile}/>
  </>
}

export default AddCompetence

