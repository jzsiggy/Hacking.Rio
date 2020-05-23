import React , { Component } from 'react';
import AppContext from './AppContext';

class AppProvider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      step: 1,
      email: '',
      name: '',
      password: '',
      age: '',
      interests: [],   
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

  render () {
    const contextValues = {
      state : this.state,
      nextStep : this.nextStep,
      prevStep : this.prevStep,
      changeState : this.changeState,
    };
    
    return (
      <AppContext.Provider value={contextValues}>
        {this.props.children}
      </AppContext.Provider>
    );
  };
};

export default AppProvider;