import React, { Component } from 'react'

import {Title} from '../components/Title'
import {SearchForm} from '../components/SearchForm'
import { MoviesList } from '../components/MoviesList'
import {NavBar} from '../components/NavBar'
import {Footer} from '../components/Footer'
import {Movie} from '../components/Movie'

import {Detail} from '../pages/Detail'

export class Peliculas extends Component {

  state = { usedSearch:false, results: [] }

  handleResults = (results) => {
    this.setState({ results, usedSearch: true })
  }

  renderResults() {
    return this.state.results.length === 0
        ? <p>No se han encontrado resultados</p>
        : <MoviesList movies={this.state.results}/>
  }
  

  render(){
    const url = new URL(document.location)
    const hasId = url.searchParams.has('id')
    

    if(hasId){
      return <Detail id={url.searchParams.get('id')}></Detail>
    }
  
    return (
        <div>
          <NavBar></NavBar>
          <div className="fondoVideo">
            <div className="relleno relative">
              <Title>Buscador de Peliculas</Title>
              <div className="searchContainer">
                <SearchForm onResults={this.handleResults}></SearchForm>
              </div>
            </div>
            {this.state.usedSearch
            ? this.renderResults()
            : <div className="relative">
                <h2 className="title m-5 relative">Encontra tu pelicula favorita!</h2>
                <p className="m-5">Ingresa el nombre de la pelicula.</p>
                <p className="m-5">Elegi la opcion que estas buscando.</p>
             </div>
            }
          </div>
          <Footer></Footer>
        </div>
        
    );
  } 
}

