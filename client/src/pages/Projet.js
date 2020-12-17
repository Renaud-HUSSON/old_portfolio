import { useParams } from "react-router-dom"
import styled from "styled-components"
import useFetchData from "../components/shared/hooks/useFetchData"
import Loading from "../components/shared/Loading"
import {motion} from 'framer-motion'

const Projet = () => {
  const id = useParams().id

  const data = useFetchData(`/api/projets/${id}`)
  
  if(!data.loading){
    const projet = data.data

    return <StyledProjet exit=" " className="content">
      <h1>{projet.name}</h1>
      <p>Le lien du site: <a href={projet.link}>{projet.link}</a></p>
      <p>Le code sur github: <a href={projet.github}>{projet.github}</a></p>
      <h2>PRÉSENTATION</h2>
      <p>{projet.description}</p>
      <h2>TECHNOLOGIES UTILISÉS</h2>
      <p className="tech">{projet.tech}</p>
    </StyledProjet>
  }

  return <div className="content">
    <Loading/>
  </div>
}

const StyledProjet = styled(motion.div)`
p {
  font-size: 1.2rem;
  
  a {
    color: lightblue;
    text-decoration: none;
  }
}

.tech {
  margin-bottom: 2rem;
}
`

export default Projet