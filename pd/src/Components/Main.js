import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {Switch,Route,Redirect,withRouter, Router,BrowserRouter} from 'react-router-dom'

import Plant from './Plant'
import Crop_Recommendation from './Crop_Recommendation'
import Fertilizer_Recommendation from './Fertilizer_Recommendation'
import Pesticide_Recommendation from './Pesticide_Recommendation';
import Home from './Home'



function Main()
{
    return(
    <>
         <Route exact path="/" component={Home}/>
         <Route exact path="/plant_disease" component={Plant}/>
         <Route exact path="/crop_recommendation" component={Crop_Recommendation}/>
         <Route exact path="/fertilizer_recommendation" component={Fertilizer_Recommendation} />
         <Route exact path="/pesticide_recommendation" component = {Pesticide_Recommendation}/>
    
    </>

        )
}
export default Main