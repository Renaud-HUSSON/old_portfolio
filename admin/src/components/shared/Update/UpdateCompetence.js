import InputComponent from "../Form/InputComponent"

const UpdateCompetence = ({item, setData, data}) => {
  return <>
    <InputComponent data={data} setData={setData} label='ID' name='id' disabled={true} value={item.id} />
    <InputComponent data={data} setData={setData} label='Nom' name='name' value={item.name}/>
    <InputComponent data={data} setData={setData} label='Type (langage ou autre)' name='type' value={item.type}/>
    <InputComponent data={data} setData={setData} label='Image' name='image' disabled={true} value={item.image}/>
  </>
}

export default UpdateCompetence