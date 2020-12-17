import { useCallback, useContext, useEffect } from "react"
import styled from "styled-components"
import { FlashContext } from "../../context/Flash"

const Flash = () => {
  const [flash, setFlash] = useContext(FlashContext)
  
  const handleClick = useCallback(() => {
    setFlash({active: false})
  }, [setFlash])
  
  useEffect(() => {
    if(flash.active){
      const timeout = window.setTimeout(() => {
        setFlash({active: false})
      }, 500000)
    }
  }, [flash, setFlash])

  return flash.active 
  ?<StyledFlash className={Object.keys(flash)[1]}>
    <p>
      {
        Object.values(flash)[1]
      }
    </p>
    <div onClick={handleClick} className="close">x</div>
  </StyledFlash>
  :<></>
}

const StyledFlash = styled.div`
  position: fixed;
  top: 5vh;
  left: 50vw;
  padding: 1rem 2rem;
  border-radius: 5px;
  animation: fadeIn 0.3s forwards;
  z-index: 1000;

  &.success, &.success * {
    background: ${props => props.theme.colors.lightGreen};
    color: ${props => props.theme.colors.darkGreen}
  }

  &.error, &.error * {
    background: ${props => props.theme.colors.lightRed};
    color: ${props => props.theme.colors.darkRed}
  }

  .close {
    position: absolute;
    top: 0px;
    padding: 0.5rem;
    right: 5px;
    color: inherit;
    cursor: pointer;
  }

  @keyframes fadeIn {
    from {
      transform: translate(-50%, -50%);
      opacity: 0;
    }

    to {
      transform: translate(-50% ,0);
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px){
    width: 90%;
  }
`

export default Flash