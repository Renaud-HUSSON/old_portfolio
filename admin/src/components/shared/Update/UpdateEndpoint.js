import InputComponent from "../Form/InputComponent"

const UpdateEndpoint = ({item, data, setData}) => {
  return <>
    <InputComponent label="ID" name="id" data={data} setData={setData} disabled={true}/>
    <InputComponent label="Chemin" name="chemin" data={data} setData={setData}/>
  </>
}

export default UpdateEndpoint