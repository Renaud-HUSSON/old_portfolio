import InputComponent from "../Form/InputComponent"

const AddEndpoint = ({setData, data}) => {
  return <>
    <InputComponent label="Chemin" name="chemin" data={data} setData={setData}/>
  </>
}

export default AddEndpoint