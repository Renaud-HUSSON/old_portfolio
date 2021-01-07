import InputComponent from "../Form/InputComponent"

const UpdateRole = ({data, setData}) => {
  return <InputComponent label="Nom" name="nom" data={data} setData={setData}/>
}

export default UpdateRole