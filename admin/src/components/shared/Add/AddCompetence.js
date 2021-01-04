import data from "../../../data"
import FileInputComponent from "../Form/FileInputComponent"
import InputComponent from "../Form/InputComponent"

const AddCompetence = ({setData, setFile}) => {
  return <>
    <InputComponent data={data} label="Nom" name="name" setData={setData}/>
    <InputComponent data={data} label="Type (langage ou autre)" name="type" setData={setData}/>
    <FileInputComponent data={data} label="Image" name="image" setData={setData} setFile={setFile}/>
  </>
}

export default AddCompetence

