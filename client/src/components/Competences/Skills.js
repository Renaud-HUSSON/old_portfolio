import styled from "styled-components"
import useFetchData from "../shared/hooks/useFetchData"
import Loading from "../shared/Loading"

const Skills = () => {
  const data = useFetchData('/api/competences')

  if(!data.loading){
    console.log("?")
    const competences = data.data
    const langages = competences.filter(c => c.type === 'langage')
    const autres = competences.filter(c => c.type !== 'langage')

    return <StyledSkills>
      <div className="langages">
        {
          langages.map(langage => (
            <div className="skill" key={langage.id}>
              <img src={langage.image} alt={langage.name}/>
              <p>{langage.name}</p>
            </div>
          ))
        }
      </div>
      <div className="autres">
        {
          autres.map(autre => (
            <div className="skill" key={autre.id}>
              <img src={autre.image} alt={autre.name}/>
              <p>{autre.name}</p>
            </div>
          ))
        }
      </div>
    </StyledSkills>
  }

  return <Loading />
}

const StyledSkills = styled.div`
  .langages, .autres {
    display: flex;
    flex-wrap: wrap;
  }

  .skill {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${props => props.theme.colors.white};
    border-radius: 10px;
    padding: 3px;
    margin: 0.5rem;

    > * {
      margin: 0 5px;
    }

    img {
      height: 25px;
    }
  }
`

export default Skills