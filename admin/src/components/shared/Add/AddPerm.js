import OptionComponent from "../Form/OptionComponent"
import SelectComponent from "../Form/SelectComponent"

const AddPerm = ({setData, data}) => {
  return <>
    <SelectComponent data={data} update={true} setData={setData} name="endpoints" label="Endpoint" url='/api/endpoints'>
      <OptionComponent label="chemin" name="id"/>
    </SelectComponent>
    <SelectComponent data={data} update={true} setData={setData} name="methods" label="Methode" url='/api/methods'>
      <OptionComponent label="nom" name="nom"/>
    </SelectComponent>
    <SelectComponent data={data} update={true} setData={setData} name="roles" label="Role" url='/api/roles'>
      <OptionComponent label="nom" name="nom"/>
    </SelectComponent>
  </>
}

export default AddPerm