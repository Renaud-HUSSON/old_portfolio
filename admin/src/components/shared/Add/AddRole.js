import InputComponent from "../Form/InputComponent"

const AddRole = ({setData, data}) => {
  return <>
    <InputComponent label="Nom" name="nom" data={data} setData={setData}/>
  </>
}

export default AddRole