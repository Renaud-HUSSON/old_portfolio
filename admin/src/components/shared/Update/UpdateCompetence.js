import InputComponent from "../Form/InputComponent"

const UpdateCompetence = ({setData, data}) => {
  return <>
    <InputComponent data={data} setData={setData} label='ID' name='id' disabled={true} />
    <InputComponent data={data} setData={setData} label='Nom' name='name'/>
    <InputComponent data={data} setData={setData} label='Type (langage ou autre)' name='type'/>
    <InputComponent data={data} setData={setData} label='Image' name='image' disabled={true}/>
  </>
}

export default UpdateCompetence