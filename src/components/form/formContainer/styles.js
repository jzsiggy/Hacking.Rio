import styled from 'styled-components';

const Container = styled.div`
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

export {
  Container,
  Next,
  Back,
  NavContainer,
};