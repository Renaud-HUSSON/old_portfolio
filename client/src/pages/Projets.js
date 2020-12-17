import styled from 'styled-components'
import Projet from '../components/Projets/Projet'
import useFetchData from '../components/shared/hooks/useFetchData'
import Loading from '../components/shared/Loading'

const Projets = () => {
  const data = useFetchData('/api/projets')

  return <section className="content">
    <h1>MES PROJETS</h1>
    <StyledProjets className="projets">
      {
        !data.loading
        ?<>
          {
            data.data.map(projet => (
              <Projet key={projet.id} id={projet.id} name={projet.name} image={projet.image}/>
            ))
          }
        </>
        :<Loading/>
      }
    </StyledProjets>
  </section>
}

const StyledProjets = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 991px){
    grid-template-columns: 1fr;
  }
`

export default Projets