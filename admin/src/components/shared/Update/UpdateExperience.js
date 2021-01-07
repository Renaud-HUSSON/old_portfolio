import InputComponent from "../Form/InputComponent"

const UpdateExperience = ({setData, data}) => {
  return <>
    <InputComponent data={data} setData={setData} label='ID' name='id' disabled={true}/>
    <InputComponent data={data} setData={setData} label='Date (AAAA-AAAA)' name='date'/>
    <InputComponent data={data} setData={setData} label='Nom' name='name'/>
  </>
}

export default UpdateExperience