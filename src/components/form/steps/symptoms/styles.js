import styled , { css } from 'styled-components';

// #46382a brown
// #f4af31 yellow
// #6fbfc1 blue

const SymptomContainer = styled.div`
  width: 110%;
  height: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow-y: scroll;
  padding: 10px 10px;
`

const S = styled.div`
  transition: 0.1s ease all;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 20%;
  margin: 5px 0;
  text-align: center;
  font-weight: bold;
  border: 1px solid #6fbfc1;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  color: #46382a;
  ${props => props.clicked && css`
    transform: scale(1.05);
  `}
  ${props => props.selected && css`
    background-color: #6fbfc1;
    color: #fff;
  `}
  cursor: pointer;
`

export {
  SymptomContainer,
  S,
};