import styled from "styled-components"

const Lower = () => {
  return <StyledLower>
    <img className="wave" src={`${process.env.PUBLIC_URL}/images/wave.svg`} alt="wave"/>
    <img className="devices" src={`${process.env.PUBLIC_URL}/images/devices.svg`} alt="devices"/>
  </StyledLower>
}

const StyledLower = styled.div`
  position: relative;
  background: ${props => props.theme.colors.white};
  flex: 1;

  .wave {
    border: none;
    outline: none;
  }

  .devices {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media screen and (max-width: 768px){
    .devices {
      display: none;
    }
  }
`

export default Lower