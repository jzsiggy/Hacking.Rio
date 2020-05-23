import React , { Component } from 'react';
import { Container , Question , Input } from '../styles';
import { Blue, Brown, Yellow } from '../../colors';
import AppContext from '../../../appContext/AppContext';

class EmailStep extends Component {
  render() {
    return(
      <Container fadingOut={this.props.fadingOut}>
        <Question>
          <Brown>E o seu</Brown>&nbsp;
          <Blue>email</Blue>
          <Yellow>?</Yellow>
        </Question>
        <Input name='email' value={this.context.state.email} onChange={this.props.handleChange}/>
      </Container>
    )
  }
};

EmailStep.contextType = AppContext;

export default EmailStep