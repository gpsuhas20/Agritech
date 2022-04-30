
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import "font-awesome/css/font-awesome.min.css"

import Main from './Components/Main'
import {BrowserRouter} from 'react-router-dom'

class App extends Component
{
  
  //passed our store instance into Provider as a prop, making it available to all of our other components.
  render()
  {
    return(
     
      <BrowserRouter >
        <div>
        <Main/>
        </div>
        </BrowserRouter>
       
    )
  }
}


export default App;






