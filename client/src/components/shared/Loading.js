import styled from "styled-components"

const Loading = () => {
  return <StyledLoading>
  </StyledLoading>
}

const StyledLoading = styled.span`
  @keyframes spin {
    from {transform: rotate(0deg); }
    to {transform: rotate(360deg); }
  }
  
  display: block;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.4);

  &:after{
    content:'';
    position: absolute;
    top: -2px;
    left: -2px;
    bottom: -2px;
    right: -2px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color:#FFF;
    animation: spin 1s linear infinite;
  }
`

export default Loading