import InputComponent from "../Form/InputComponent"

const UpdateProjet = ({setData, data}) => {
  return <>
    <InputComponent data={data} setData={setData} label='ID' name='id' disabled={true}/>
    <InputComponent data={data} setData={setData} label='Nom' name='name'/>
    <InputComponent data={data} setData={setData} label='Image' name='image' disabled={true}/>
    <InputComponent data={data} setData={setData} label='Description' name='description' multiline={true}/>
    <InputComponent data={data} setData={setData} label='Technologies' name='tech'/>
    <InputComponent data={data} setData={setData} label='Lien du site' name='link'/>
    <InputComponent data={data} setData={setData} label='Lien du github' name='github'/>
  </>
}

export default UpdateProjet