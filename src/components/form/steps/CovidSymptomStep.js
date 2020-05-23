import React , { Component } from 'react';
import { Container , Question } from '../styles';
import Symptoms from './symptoms/Symptoms';
import { Blue, Brown, Yellow } from '../../colors';
import AppContext from '../../../appContext/AppContext';

class CovidSymptomStep extends Component {
  render() {
    return(
      <Container fadingOut={this.props.fadingOut}>
        <Question>
          <Brown>Quais desses</Brown>&nbsp;
          <Blue>sintomas</Blue>&nbsp;
          <Brown>você está</Brown>&nbsp;
          <Yellow>sentindo</Yellow>
          <Brown>?</Brown>
        </Question>
        <Symptoms 
        symptoms={[
          { name: 'Febre',                    id: 'febre' },
          { name: 'Dor de Garganta',          id: 'dorGarganta' },
          { name: 'Tosse',                    id: 'tosse' },
          { name: 'Dor de Cabeça',            id: 'dorCabeca' },
          { name: 'Nariz Escorrendo',         id: 'coriza' },
          { name: 'Cansaço',                  id: 'cansaco' },
          { name: 'Diarreia',                 id: 'diarreia' },
          { name: 'Dificuldade em Respirar',  id: 'difResp' }
        ]}
        />
      </Container>
    )
  }
};

CovidSymptomStep.contextType = AppContext;

export default CovidSymptomStep;