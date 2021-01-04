import FileInputComponent from "../Form/FileInputComponent"
import InputComponent from "../Form/InputComponent"

const AddProjet = ({setData, setFile, data}) => {
  return <>
    <InputComponent data={data} label="Nom" name="name" setData={setData}/>
    <FileInputComponent label="Image" name="image" setData={setData} setFile={setFile}/>
    <InputComponent data={data} multiline={true} label="Description" name="description" setData={setData}/>
    <InputComponent data={data} label="Technologies" name="tech" setData={setData}/>
    <InputComponent data={data} label="Lien" name="link" setData={setData}/>
    <InputComponent data={data} label="Github" name="github" setData={setData}/>
  </>
}

export default AddProjet