import React , { Component } from 'react';
import { Container , Question , Input } from '../styles';
import { Blue, Brown, Yellow } from '../../colors';
import AppContext from '../../../appContext/AppContext';

class CPFStep extends Component {
  render() {
    return(
      <Container fadingOut={this.props.fadingOut}>
        <Question>
          <Brown>E o seu</Brown>&nbsp;
          <Blue>CPF</Blue>
          <Yellow>?</Yellow>
        </Question>
        <Input name='cpf' value={this.context.state.cpf} onChange={this.props.handleChange}/>
      </Container>
    )
  }
};

CPFStep.contextType = AppContext;

export default CPFStep