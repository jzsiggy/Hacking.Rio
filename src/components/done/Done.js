import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Container , TextContainer , ThankYou , ActionContainer , Action } from './styles';
import { Blue, Brown, Yellow } from '../colors';

class Done extends Component {
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
        <TextContainer>
          <ThankYou>
            <Blue>Obrigado</Blue>&nbsp;
            <Brown>por preencher nosso</Brown>&nbsp;
            <Yellow>cadastro</Yellow>
            <Brown>.</Brown>
          </ThankYou>
        </TextContainer>
        <ActionContainer>
          <Action 
          onClick={() => this.goTo('/')}
          color='#ffdb5e'
          >
            Voltar para Página Inicial
          </Action>
        </ActionContainer>
      </Container>
    )
  };
};

export default withRouter(Done);