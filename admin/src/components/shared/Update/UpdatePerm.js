import InputComponent from "../Form/InputComponent"
import SelectComponent from "../Form/SelectComponent"
import OptionComponent from "../Form/OptionComponent"

const UpdatePerm = ({data, setData}) => {
  return <>
    <InputComponent label="ID" name="id" data={data} setData={setData} disabled={true}/>
    <SelectComponent data={data} setData={setData} name="endpoints" label="Endpoint" url='/api/endpoints'>
      <OptionComponent label="chemin" name="id"/>
    </SelectComponent>
    <SelectComponent data={data} setData={setData} name="methods" label="Methode" url='/api/methods'>
      <OptionComponent label="nom" name="nom"/>
    </SelectComponent>
    <SelectComponent data={data} setData={setData} name="roles" label="Role" url='/api/roles'>
      <OptionComponent label="nom" name="nom"/>
    </SelectComponent>
  </>
}

export default UpdatePerm