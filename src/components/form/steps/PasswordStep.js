import React , { Component } from 'react';
import { Container , Question , Input } from '../styles';
import { Blue, Brown, Yellow } from '../../colors';
import AppContext from '../../../appContext/AppContext';

class PasswordStep extends Component {
  render() {
    return(
      <Container fadingOut={this.props.fadingOut}>
        <Question>
          <Brown>Agora vamos criar a sua</Brown>&nbsp;
          <Blue>senha</Blue>
          <Yellow>!</Yellow>
        </Question>
        <Input name='password' value={this.context.state.pasword} type='password' onChange={this.props.handleChange}/>
      </Container>
    )
  }
};

PasswordStep.contextType = AppContext;

export default PasswordStep