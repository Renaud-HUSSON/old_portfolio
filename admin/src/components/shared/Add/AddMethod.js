import InputComponent from "../Form/InputComponent"

const AddMethod = ({setData, data}) => {
  return <>
    <InputComponent label="Nom" name="nom" data={data} setData={setData}/>
  </>
}

export default AddMethod