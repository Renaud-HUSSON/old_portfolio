import InputComponent from "../Form/InputComponent"

const UpdateParcours = ({item, setData, data}) => {return <>
    <InputComponent data={data} setData={setData} label='ID' name='id' disabled={true} value={item.id} />
    <InputComponent data={data} setData={setData} label='Date (AAAA-AAAA)' name='date' value={item.date}/>
    <InputComponent data={data} setData={setData} label='Nom' name='name' value={item.name}/>
  </>
}

export default UpdateParcours