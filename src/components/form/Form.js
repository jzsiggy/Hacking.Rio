import React , { Component } from 'react';
import Header from './header/Header';
import FormContainer from './formContainer/FormContainer';

import AppProvider from '../../appContext/AppProvider';


class Form extends Component {
  render () {
    return(
      <AppProvider>
        <Header />
        <FormContainer />
      </AppProvider>
    )
  }
}

export default Form;