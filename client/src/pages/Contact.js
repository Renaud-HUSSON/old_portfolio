import ContactForm from "../components/Contact/ContactForm"
import Informations from "../components/Contact/Informations"
import {motion} from 'framer-motion'
import { exitRight, scaleIn, slideInFromRight } from "../utils/animations"

const Contact = () => {
  const scale = scaleIn()
  const right = slideInFromRight()
  
  return <motion.div className="content" variants={scale} initial={{...scale.hidden, ...right.hidden}} animate={{...scale.visible, ...right.visible}} exit={exitRight().exit}>
    <h1>ME CONTACTER</h1>
    <Informations />
    <ContactForm />
  </motion.div>
}

export default Contact