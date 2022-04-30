import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {Switch,Route,Redirect,withRouter, Router,BrowserRouter} from 'react-router-dom'

import Plant from './Plant'



function Main()
{
    return(
    <>
         <Route exact path="/" component={Plant}/>
      
    
    
    </>

        )
}
export default Main