import React , { Component } from 'react';
import { Container, Blob, Logo } from './styles';
import { Blue, Brown, Yellow } from '../../colors';

class Header extends Component {
  render () {
    return(
      <Container>
        <Logo>
          <Blue>True</Blue>&nbsp;
          <Brown>Space</Brown>
          <Yellow>.</Yellow>
        </Logo>
        <Blob />
      </Container>
    )
  }
}

export default Header;