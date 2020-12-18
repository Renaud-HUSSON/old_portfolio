import styled from "styled-components"

const Lower = () => {
  return <StyledLower>
    <div className="fixbug"></div>
    <img className="devices" src={`${process.env.PUBLIC_URL}/images/devices.svg`} alt="devices"/>
  </StyledLower>
}

const StyledLower = styled.div`
  position: relative;
  flex: 1;
  background: ${props => props.theme.colors.white};
  background-repeat: no-repeat;
  background-image: url(${process.env.PUBLIC_URL}/images/wave.svg);
  background-size: 100vw;
  z-index: -3;
  height: calc(50vh - ${props => props.theme.footerHeight});

  .fixbug {
    height: 1px;
    width: 100%;
    background: ${props => props.theme.colors.darkBlue};
  }

  .devices {
    width: 40vw;
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