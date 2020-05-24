import React , { Component } from 'react';
import { Container , Question } from '../styles';
import Symptoms from './symptoms/Symptoms';
import { Blue, Brown, Yellow } from '../../colors';
import AppContext from '../../../appContext/AppContext';

class CancerSymptom2Step extends Component {
  render() {
    return(
      <Container fadingOut={this.props.fadingOut}>
        <Question>
          <Brown>Você</Brown>&nbsp;
          <Blue>sentiu</Blue>&nbsp;
          <Brown>algum desses</Brown>&nbsp;
          <Yellow>sintomas</Yellow>&nbsp;
          {
            window.innerWidth < 400 &&
            <br />
          }
          <Brown>recentemente?</Brown>
        </Question>
        <Symptoms 
        symptoms={[
          { name: 'Pele Roxa',               id: 'peleRoxa' },
          { name: 'Sangramentos',            id: 'sangAnormal' },
          { name: 'Dor nas Juntas',          id: 'dorOsso' },
          { name: 'Olhos Saltados',          id: 'olhosSaltados' },
          { name: 'Pele Amarelada',          id: 'peleAmarela' },
          { name: 'Olho Amarelado',          id: 'olhoAmarelo' },
          { name: 'Dor no Abdómen',          id: 'dorAbdomem' },
          { name: 'Dor de Ouvido',           id: 'dorOuvido' },
        ]}
        />
      </Container>
    )
  }
};

CancerSymptom2Step.contextType = AppContext;

export default CancerSymptom2Step;