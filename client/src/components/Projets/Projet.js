import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { slideInFromBottom, slideInFromTop } from '../../utils/animations'

const Projet = ({name, image, id}) => {
  const bottom = slideInFromBottom(undefined, 0.2/id)
  const top = slideInFromTop(undefined, 0.2/id);

  const thumbnailImage = image.replace(/^(.*)([.](jpg|png|jpeg))$/, '$1-thumbnail$2')

  console.log(thumbnailImage)
  
  return <Link to={`/projet/${id}`}>
    <StyledProjet variants={id % 2 === 0 ? top : bottom} initial="hidden" animate="visible" exit=" ">
      <img src={image} alt={name}/>
      <div className="hover">
        <p>{name}</p>
      </div>
    </StyledProjet>
  </Link>
}

const StyledProjet = styled(motion.div)`
  position: relative;

  img {
    width: 100%;
  }

  .hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: 0.3s;

    p {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 1rem;
      font-size: 2rem;
      font-weight: bold;
    }

    &:hover {
      opacity: 1;
    }
  }
`

export default Projet