import { useParams } from "react-router-dom"
import styled from "styled-components"
import useFetchData from "../components/shared/hooks/useFetchData"
import Loading from "../components/shared/Loading"
import {motion} from 'framer-motion'
import { exitTop, fadeIn, slideInFromLeft } from "../utils/animations"
import {Helmet} from 'react-helmet-async'

const Projet = () => {
  const anim = exitTop()
  const fade = fadeIn()
  
  const id = useParams().id

  const data = useFetchData(`/api/projets/${id}`)
  
  if(!data.loading){
    const projet = data.data

    return <StyledProjet variants={anim} initial={fade.hidden} animate={fade.visible} exit="exit" className="content">
      <Helmet>
        <title>Renaud HUSSON | {projet.name}</title>
        <meta name="description" content={`Cette page présente le projet suivant: ${projet.name}, en indicant à quoi il sert et avec quels technologies je l'ai créé`}/>
      </Helmet>
      <motion.section variants={slideInFromLeft()} initial="hidden" animate="visible">
        <h1>{projet.name}</h1>
        <p>Le lien du site: <a target="_blank" rel="noreferrer" href={projet.link}>{projet.link}</a></p>
        <p>Le code sur github: <a target="_blank" rel="noreferrer" href={projet.github}>{projet.github}</a></p>
      </motion.section>
      <motion.section variants={slideInFromLeft(undefined, 0.15)} initial="hidden" animate="visible">
        <h2>TECHNOLOGIES UTILISÉS</h2>
        <p className="tech">{projet.tech}</p>
      </motion.section>
      <motion.section variants={slideInFromLeft(undefined, 0.3)} initial="hidden" animate="visible" className="presentation">
        <h2>PRÉSENTATION</h2>
        <pre><p>{projet.description}</p></pre>
      </motion.section>
    </StyledProjet>
  }

  return <div className="content">
    <Loading/>
  </div>
}

const StyledProjet = styled(motion.div)`
  pre {
    white-space: pre-wrap;

    p {
      font-size: 1.2rem;
    }
    
    a {
      color: lightblue;
      text-decoration: none;
    }
  }

  .presentation {
    padding-bottom: 2rem;
  }
`

export default Projet