import styled from 'styled-components'

const Burger = ({setNav}) => {
  const handleClick = () => {
    setNav(nav => !nav)
  }
  
  return <StyledBurger onClick={handleClick}>
    <div className="burger-item"></div>
    <div className="burger-item"></div>
    <div className="burger-item"></div>
  </StyledBurger>
}

const StyledBurger = styled.div`
  height: 100%;
  display: none;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  
  div {
    height: 3px;
    width: 2rem;
    background: ${props => props.theme.colors.white};
    margin: 3px;
  }

  @media screen and (max-width: 768px){
    display: flex;
  }

`

export default Burger