import ContactForm from "../components/Contact/ContactForm"
import Informations from "../components/Contact/Informations"
import {motion} from 'framer-motion'
import { slideInFromRight } from "../utils/animations"
import {Helmet} from 'react-helmet-async'

const Contact = () => {
  const right = slideInFromRight(0.625, undefined, window.innerWidth)
  
  return <motion.div className="content" variants={right} initial="hidden" animate="visible" exit="exit">
    <Helmet>
      <title>Renaud HUSSON | Me contacter</title>
      <meta name="description" content="Cette partie de mon portfolio permet de me contacter, soit par email soit en postant un message dans le formulaire prévu pour"/>
    </Helmet>
    <h1>ME CONTACTER</h1>
    <Informations />
    <ContactForm />
  </motion.div>
}

export default Contact