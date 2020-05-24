import React , { Component } from 'react';
import { Container , Question } from '../styles';
import Symptoms from './symptoms/Symptoms';
import { Blue, Brown, Yellow } from '../../colors';
import AppContext from '../../../appContext/AppContext';

class CancerSymptomStep extends Component {
  render() {
    return(
      <Container fadingOut={this.props.fadingOut}>
        <Question>
          <Brown>E desses</Brown>&nbsp;
          <Blue>daqui</Blue>
          <Brown>?</Brown>
        </Question>
        <Symptoms 
        symptoms={[
          { name: 'Palidez',                    id: 'palidez' },
          { name: 'Vômitos',                    id: 'vomito' },
          { name: 'Dor de Barriga',             id: 'dorBarriga' },
          { name: 'Sangue na Urina',            id: 'sangueUrina' },
          { name: 'Pupila Esbranquiçada',       id: 'pupilaBranca' },
          { name: 'Perda de Peso',              id: 'perdaPeso' },
          { name: 'Inchaço',                    id: 'inchaco' },
          { name: 'Pele Vermelha',              id: 'peleVermelha' },
        ]}
        />
      </Container>
    )
  }
};

CancerSymptomStep.contextType = AppContext;

export default CancerSymptomStep;