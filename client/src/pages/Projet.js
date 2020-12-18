import { useParams } from "react-router-dom"
import styled from "styled-components"
import useFetchData from "../components/shared/hooks/useFetchData"
import Loading from "../components/shared/Loading"
import {motion} from 'framer-motion'
import { exitTop, fadeIn, slideInFromLeft } from "../utils/animations"

const Projet = () => {
  const anim = exitTop()
  const fade = fadeIn()
  
  const id = useParams().id

  const data = useFetchData(`/api/projets/${id}`)
  
  if(!data.loading){
    const projet = data.data

    return <StyledProjet variants={anim} initial={fade.hidden} animate={fade.visible} exit="exit" className="content">
      <motion.div variants={slideInFromLeft()} initial="hidden" animate="visible">
        <h1>{projet.name}</h1>
        <p>Le lien du site: <a href={projet.link}>{projet.link}</a></p>
        <p>Le code sur github: <a href={projet.github}>{projet.github}</a></p>
      </motion.div>
      <motion.div variants={slideInFromLeft(undefined, 0.15)} initial="hidden" animate="visible" className="">
        <h2>PRÉSENTATION</h2>
        <p>{projet.description}</p>
      </motion.div>
      <motion.div variants={slideInFromLeft(undefined, 0.3)} initial="hidden" animate="visible">
        <h2>TECHNOLOGIES UTILISÉS</h2>
        <p className="tech">{projet.tech}</p>
      </motion.div>
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