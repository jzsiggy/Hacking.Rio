import styled , { css , keyframes } from 'styled-components';

const HeaderHide = styled.div`
  @media (max-height: 400px) {
    display: none;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-height: 400px) {
    position: absolute;
    width: 80%;
    bottom: 10px;
  }
`

const Next = styled.span`
  transition: 0.3s ease all;
  font-size: 2.3rem;
  cursor: pointer;
`

const Back = styled.span`
  transition: 0.3s ease all;
  font-size: 2.3rem;
  cursor: pointer;
`

const Container = styled.div`
  transition: 0.3s ease all;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85%;
  width: 80vw;
  ${props => props.fadingOut && css`
    opacity: 0;
  `}
  animation: ${fadeIn} 0.3s linear;
`

const Question = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 30px;
`

const Input = styled.input`
  border: 1px solid #f4af31;
  height: 40px !important;
  width: 100%;

  padding-left: 10px;

  font-family: Montserrat, sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
  color: #46382a;

  border-radius: 5px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;
`

export {
  HeaderHide,
  SectionContainer,
  NavContainer,
  Next, 
  Back,
  Container,
  Question,
  Input,
};