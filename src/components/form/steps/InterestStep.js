import React , { Component } from 'react';
import { Container , Question , Input } from '../styles';
import { Blue, Brown, Yellow } from '../../colors';
import AppContext from '../../../appContext/AppContext';

class InterestStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests : [],
    };
  };

  render() {
    return(
      <Container fadingOut={this.props.fadingOut}>
        <Question>
          <Brown>Me conte um pouco mais sobre seus</Brown>&nbsp;
          <Blue>interesses</Blue>
          <Yellow>!</Yellow>
        </Question>
        <Input />
      </Container>
    )
  }
};

InterestStep.contextType = AppContext;

export default InterestStep;