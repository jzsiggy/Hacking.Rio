import React , { Component } from 'react';
import { Container , Question } from '../styles';
import { Blue, Brown, Yellow } from '../../colors';

import Select from '@material-ui/core/Select';
import AppContext from '../../../appContext/AppContext';


class AgeStep extends Component {
  render() {
    return(
      <Container fadingOut={this.props.fadingOut}>
      <Question>
        <Brown>Quantos</Brown>&nbsp;
        <Blue>anos</Blue>&nbsp;
        <Brown>você tem</Brown>
        <Yellow>?</Yellow>
      </Question>

      <Select
        style={{
          'fontFamily' : 'Montserrat',
          'fontWeight' : 'bold',
          'fontSize' : '1.3rem',
          'color' : '#46382a',
          'marginBottom' : '40px',
        }}
        native
        value={this.context.state.age}
        onChange={this.props.handleChange}
        inputProps={{
          name: 'age',
          id: 'age',
        }}
      >
        <option aria-label="None" value="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
        {
          [...Array(19).keys()].map(num => {
            return(
              <option value={num} key={num}>{num}</option>
            )
          })
        }
      </Select>
    </Container>
    )
  }
};

AgeStep.contextType = AppContext;

export default AgeStep