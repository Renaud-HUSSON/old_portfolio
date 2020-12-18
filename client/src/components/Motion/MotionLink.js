import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const MotionLink = ({children, to, anim, setNav}) => {
  const MotionLink = motion.custom(Link)

  const handleClick = () => {
    setNav(false)
  }
  
  return <MotionLink onClick={handleClick} variants={anim} initial="hidden" animate="visible" exit="exit" to={to}>
    {children}
  </MotionLink>
}

export default MotionLink