import ContactForm from "../components/Contact/ContactForm"
import Informations from "../components/Contact/Informations"
import {motion} from 'framer-motion'
import { slideInFromRight } from "../utils/animations"

const Contact = () => {
  const right = slideInFromRight(0.625, undefined, window.innerWidth)
  
  return <motion.div className="content" variants={right} initial="hidden" animate="visible" exit="exit">
    <h1>ME CONTACTER</h1>
    <Informations />
    <ContactForm />
  </motion.div>
}

export default Contact