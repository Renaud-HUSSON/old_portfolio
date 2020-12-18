import { motion } from "framer-motion"
import styled from "styled-components"
import { fadeIn } from "../../utils/animations"

const Lower = () => {
  const anim = fadeIn(0.7, 0.2)
  
  return <StyledLower>
    <div className="fixbug"></div>
    <motion.img variants={anim} initial="hidden" animate="visible" className="devices" src={`${process.env.PUBLIC_URL}/images/devices.svg`} alt="devices"/>
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