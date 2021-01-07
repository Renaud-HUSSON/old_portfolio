import OptionComponent from "../Form/OptionComponent"
import SelectComponent from "../Form/SelectComponent"

const AddPerm = ({setData}) => {
  return <>
    <SelectComponent setData={setData} name="endpoints" label="Endpoint" url='/api/endpoints'>
      <OptionComponent label="chemin" name="id"/>
    </SelectComponent>
    <SelectComponent setData={setData} name="methods" label="Methode" url='/api/methods'>
      <OptionComponent label="nom" name="nom"/>
    </SelectComponent>
    <SelectComponent setData={setData} name="roles" label="Role" url='/api/roles'>
      <OptionComponent label="nom" name="nom"/>
    </SelectComponent>
  </>
}

export default AddPerm