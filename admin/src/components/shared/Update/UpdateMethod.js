import InputComponent from "../Form/InputComponent"

const UpdateMethod = ({data, setData}) => {
  return <InputComponent label="Nom" name="nom" data={data} setData={setData}/>
}

export default UpdateMethod