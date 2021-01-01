import { useState } from "react"
import FileInputComponent from "../Form/FileInputComponent"
import InputComponent from "../Form/InputComponent"

const AddCompetence = ({setData}) => {
  return <>
    <InputComponent label="Nom" name="name" setData={setData}/>
    <InputComponent label="Type (langage ou autre)" name="type" setData={setData}/>
    <FileInputComponent label="Image" name="image" setData={setData} />
  </>
}

export default AddCompetence

