import OptionComponent from "../Form/OptionComponent"
import SelectComponent from "../Form/SelectComponent"

const AddPerm = ({setData, data}) => {
  return <>
    <SelectComponent setData={setData} name="endpoint" label="Endpoint" url='/api/endpoints'>
      <OptionComponent label="chemin" name="id"/>
    </SelectComponent>
    <SelectComponent setData={setData} name="method" label="Methode" url='/api/methods'>
      <OptionComponent label="nom" name="nom"/>
    </SelectComponent>
    <SelectComponent setData={setData} name="role" label="Role" url='/api/roles'>
      <OptionComponent label="nom" name="nom"/>
    </SelectComponent>
  </>
}

export default AddPerm