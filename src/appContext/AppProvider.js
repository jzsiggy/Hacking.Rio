import React , { Component } from 'react';
import AppContext from './AppContext';

class AppProvider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      step: 4,
      cpf: '',
      name: '',
      age: '',
      symptoms: [],   
    };
  };

  nextStep = () => {
    this.setState({
      step: this.state.step + 1,
    });
  };

  prevStep = () => {
    this.setState({
      step: this.state.step - 1,
    })
  };

  changeState = (key, value) => {
    let newState = {...this.state};
    newState[key] = value;
    this.setState(newState)
  };

  manageSymptom = (name) => {
    let newState = {...this.state};
    const index = newState.symptoms.indexOf(name);
    if (index != -1) {
      newState.symptoms.splice(index, 1);
    } else {
      newState.symptoms.push(name);
    }
    this.setState(newState)
  }

  render () {
    const contextValues = {
      state : this.state,
      nextStep : this.nextStep,
      prevStep : this.prevStep,
      changeState : this.changeState,
      manageSymptom : this.manageSymptom,
    };
    
    return (
      <AppContext.Provider value={contextValues}>
        {this.props.children}
      </AppContext.Provider>
    );
  };
};

export default AppProvider;