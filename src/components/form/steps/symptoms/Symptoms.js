import React , { Component } from 'react';
import { SymptomContainer , S } from './styles';
import AppContext from '../../../../appContext/AppContext';

class Symptoms extends Component {
  state = {
    selected: this.context.state.symptoms,
  }

  componentWillMount() {
    for (let symptom of this.props.symptoms) {
      console.log(symptom.id)
      this.setState({
        [symptom.id] : { clicked: false },
      });
    };
  };

  click = (name) => {
    this.context.manageSymptom(name);

    let newState = {...this.state};
    newState[name].clicked = true;
    this.setState(newState);

    setTimeout(() => {
      let newState = {...this.state};
      newState[name].clicked = false;
      this.setState(newState);
    }, 100)
  };
  
  render() {
    return(
      <SymptomContainer>
        {
          this.props.symptoms.map((symptom, index) => {
            return(
              <S 
              key={index}
              name={symptom.id} 
              clicked={this.state[`${symptom.id}`].clicked} 
              onClick={() => this.click(symptom.id)}
              selected={this.state.selected.includes(symptom.id)}
              >
                {symptom.name}
              </S>
            )
          })
        }
      </SymptomContainer>
    )
  }
}

Symptoms.contextType = AppContext;

export default Symptoms;