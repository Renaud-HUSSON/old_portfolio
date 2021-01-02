import FileInputComponent from "../Form/FileInputComponent"
import InputComponent from "../Form/InputComponent"

const AddProjet = ({setData, setFile}) => {
  return <>
    <InputComponent label="Nom" name="name" setData={setData}/>
    <FileInputComponent label="Image" name="image" setData={setData} setFile={setFile}/>
    <InputComponent multiline={true} label="Description" name="description" setData={setData}/>
    <InputComponent label="Technologies" name="tech" setData={setData}/>
    <InputComponent label="Lien" name="link" setData={setData}/>
    <InputComponent label="Github" name="github" setData={setData}/>
  </>
}

export default AddProjet