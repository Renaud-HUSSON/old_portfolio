import ContactForm from "../components/Contact/ContactForm"
import Informations from "../components/Contact/Informations"
import {motion} from 'framer-motion'

const Contact = () => {
  return <motion.div className="content" exit=" ">
    <h1>ME CONTACTER</h1>
    <Informations />
    <ContactForm />
  </motion.div>
}

export default Contact