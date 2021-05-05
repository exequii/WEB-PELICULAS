import React, { Component } from 'react'

import {NavBar} from '../components/NavBar'
import {Footer} from '../components/Footer'
import {Carrousel} from '../components/Carrousel'

import {Detail} from '../pages/Detail'

import 'bootstrap/dist/css/bootstrap.min.css'

export class Home extends Component {

  render(){

    return (
        <div>
        <NavBar></NavBar>
        <Carrousel></Carrousel>
        <Footer></Footer>
        </div>
        
    );
  } 
}

