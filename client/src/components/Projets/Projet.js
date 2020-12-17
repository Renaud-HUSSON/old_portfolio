import {Link} from 'react-router-dom'
import styled from 'styled-components'
import spinalCase from '../../functions/spinalCase'

const Projet = ({name, image, id}) => {
  return <Link to={`/projet/${id}`}>
    <StyledProjet>
      <img src={image} alt={name}/>
      <div className="hover">
        <p>{name}</p>
      </div>
    </StyledProjet>
  </Link>
}

const StyledProjet = styled.div`
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