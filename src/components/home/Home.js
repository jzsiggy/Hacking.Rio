import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Container , Logo , LogoContainer , LogoText , ActionContainer , Action } from './styles';
import { Blue, Brown, Yellow } from '../colors';

class Home extends Component {
  state = {
    fadingOut: false,
  }

  goTo = (path) => {
    this.setState({
      fadingOut: true,
    })

    setTimeout(() => {
      this.props.history.push(path);
    }, 300)
  }
  
  render() {
    return(
      <Container fadingOut={this.state.fadingOut}>
        <LogoContainer>
          <Logo />
          <LogoText>
            <Blue>True</Blue>&nbsp;
            <Brown>Space</Brown>
            <Yellow>.</Yellow>
          </LogoText>
        </LogoContainer>
        <ActionContainer>
          <Action 
          onClick={() => this.goTo('/forms')}
          color='#f4af31'
          >
            Preencher Formulário
          </Action>
        </ActionContainer>
      </Container>
    )
  };
};

export default withRouter(Home);