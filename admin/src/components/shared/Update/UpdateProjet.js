import InputComponent from "../Form/InputComponent"

const UpdateProjet = ({item, setData, data}) => {
  return <>
    <InputComponent data={data} setData={setData} label='ID' name='id' disabled={true} value={item.id} />
    <InputComponent data={data} setData={setData} label='Nom' name='name' value={item.name}/>
    <InputComponent data={data} setData={setData} label='Image' name='image' disabled={true} value={item.image}/>
    <InputComponent data={data} setData={setData} label='Description' name='description' value={item.description} multiline={true}/>
    <InputComponent data={data} setData={setData} label='Technologies' name='tech' value={item.tech}/>
    <InputComponent data={data} setData={setData} label='Lien du site' name='link' value={item.link}/>
    <InputComponent data={data} setData={setData} label='Lien du github' name='github' value={item.github}/>
  </>
}

export default UpdateProjet