import React , { Component } from 'react';
import { Container , NavContainer , Next , Back} from './styles';
import AppContext from '../../../appContext/AppContext';
import { withRouter } from 'react-router-dom';

import NameStep from '../steps/NameStep';
import EmailStep from '../steps/EmailStep';
import AgeStep from '../steps/AgeStep';
import InterestStep from '../steps/InterestStep';
import PasswordStep from '../steps/PasswordStep';

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
      if (this.context.state.step >= 5) {
        this.props.history.push('/done');
        return
      }

      this.context.nextStep()
      this.setState({
        fadingOut: false,
      })
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
        <div style={{
          'display':'flex',
          'flexDirection':'column',
          'justifyContent':'space-between',
          'height':'30%'
        }}
        >

        {
        this.context.state.step === 1 &&
        <NameStep 
        fadingOut={this.state.fadingOut}
        handleChange={this.handleChange}
        />
        }
        {
        this.context.state.step === 2 &&
        <EmailStep 
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
        <InterestStep 
        fadingOut={this.state.fadingOut}
        handleChange={this.handleChange}
        />
        }
        {
        this.context.state.step === 5 &&
        <PasswordStep 
        fadingOut={this.state.fadingOut}
        handleChange={this.handleChange}
        />
        }

        {
          this.context.state.step >= 1 && this.context.state.step <= 5 &&
          <NavContainer>
            <Back onClick={this.prevStep}>🔙</Back>
            <Next onClick={this.nextStep}>👍</Next>
          </NavContainer>
        }
        
        </div>
      </Container>
    )
  }
}

FormContainer.contextType = AppContext;

export default withRouter(FormContainer);