import { Fragment } from "react"
import styled from "styled-components"
import useFetchData from "../shared/hooks/useFetchData"
import Loading from "../shared/Loading"

const Parcours = () => {
  const data = useFetchData('/api/parcours')

  if(!data.loading){
    const parcours = data.data
    
    return <StyledParcours>
      <div className="formation">
        <div className="connecter"></div>
        {
          parcours.map(diplome => (
            <Fragment key={diplome.id}>
              <div className="diplome">
                <div className="date">{diplome.date}</div>
                <div className="name">{diplome.name}</div>
              </div>
              <div className="connecter"></div>
            </Fragment>
          ))
        }
      </div>
    </StyledParcours>
  }

  return <Loading />
}

const StyledParcours = styled.section`
  .formation {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25vw;
    padding: 1rem;

    .connecter {
      height: 70px;
      width: 3px;
      background: ${props => props.theme.colors.white};
    }

    .date {
      font-size: 1.8rem;
      font-weight: bold;
    }

    .diplome {
      background: ${props => props.theme.colors.white};
      font-size: 1.4rem;
      width: 100%;
      padding: 1rem;

      > * {
        color: ${props => props.theme.colors.darkBlue};
      }
    }
  }

  @media screen and (max-width: 1200px){
    .formation {
      width: 40vw;
    }
  }

  @media screen and (max-width: 991px){
    .formation {
      width: 55vw;
    }
  }

  @media screen and (max-width: 768px){
    .formation {
      width: 90vw;
    }
  }
`

export default Parcours