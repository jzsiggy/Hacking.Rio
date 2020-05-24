import React , { Component } from 'react';
import Axios from 'axios';

import { Container , NavContainer , Next , Back} from './styles';
import AppContext from '../../../appContext/AppContext';
import { withRouter } from 'react-router-dom';

import NameStep from '../steps/NameStep';
import CPFStep from '../steps/CPFStep';
import AgeStep from '../steps/AgeStep';
import CovidSymptomStep from '../steps/CovidSymptomStep';
import CancerSymptomStep from '../steps/CancerSymptomStep';
import CancerSymptom2Step from '../steps/CancerSymptom2Step';


class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadingOut : false,
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.context.changeState(name, value)
  }

  nextStep = () => {
    this.setState({
      fadingOut: true,
    })

    setTimeout(() => {
      if (this.context.state.step >= 6) {  
        let body = {
          nome: this.context.state.name,
          idade: parseFloat(this.context.state.age),
          cpf: this.context.state.cpf,
          sintomas: this.context.state.symptoms,
        }
        console.log(body);
        Axios.post('https://polar-inlet-24420.herokuapp.com/preencher', body)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err)
        })
        this.props.history.push('/done');
      }
      else {
        this.context.nextStep()
        this.setState({
          fadingOut: false,
        })
      }
    }, 300)
  }

  prevStep = () => {
    this.setState({
      fadingOut: true,
    })

    setTimeout(() => {
      if (this.context.state.step <= 1) {
        this.props.history.push('/');
        return
      }
      
      this.context.prevStep()
      this.setState({
        fadingOut: false,
      })
    }, 300)
  }

  render() {
    return(
      <Container>
        {
        this.context.state.step === 1 &&
        <NameStep 
        fadingOut={this.state.fadingOut}
        handleChange={this.handleChange}
        />
        }
        {
        this.context.state.step === 2 &&
        <CPFStep 
        fadingOut={this.state.fadingOut}
        handleChange={this.handleChange}
        />
        }
        {
        this.context.state.step === 3 &&
        <AgeStep 
        fadingOut={this.state.fadingOut}
        handleChange={this.handleChange}
        />
        }
        {
        this.context.state.step === 4 &&
        <CovidSymptomStep 
        fadingOut={this.state.fadingOut}
        />
        }
        {
        this.context.state.step === 5 &&
        <CancerSymptomStep 
        fadingOut={this.state.fadingOut}
        />
        }
        {
        this.context.state.step === 6 &&
        <CancerSymptom2Step 
        fadingOut={this.state.fadingOut}
        />
        }

        <NavContainer>
          <Back onClick={this.prevStep}>🔙</Back>
          <Next onClick={this.nextStep}>👍</Next>
        </NavContainer>
      </Container>
    )
  }
}

FormContainer.contextType = AppContext;

export default withRouter(FormContainer);