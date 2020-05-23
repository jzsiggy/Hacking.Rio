import styled , { css , keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  transition: 0.3s ease all;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  ${props => props.fadingOut && css`
    opacity: 0;
  `}
  animation: ${fadeIn} 0.3s linear;
`

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
`

const ThankYou = styled.span`
  position: absolute;
  font-weight: bold;
  font-size: 2rem;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: center;
`

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 40%;
`

const Action = styled.span`
  transition: 0.3s ease all;
  border-radius: 3px;
  padding: 1rem 2rem;
  margin: 0.5rem 1rem;
  background: transparent;
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    transform: scale(1.07);
  }
`

export {
  Container,
  TextContainer,
  ThankYou,
  ActionContainer,
  Action,
}