import React , { Component } from 'react';
import { Container , Question , Input } from '../styles';
import { Blue, Brown, Yellow } from '../../colors';
import AppContext from '../../../appContext/AppContext';

class NameStep extends Component {  
  render() {
    return(
      <Container fadingOut={this.props.fadingOut}>
        <Question>
          <Brown>Qual é o seu</Brown>&nbsp;
          <Blue>nome</Blue>
          <Yellow>?</Yellow>
        </Question>
        <Input name='name' value={this.context.state.name} onChange={this.props.handleChange}/>
      </Container>
    )
  }
};

NameStep.contextType = AppContext;

export default NameStep