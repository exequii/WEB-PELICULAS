import React, { Component } from 'react'

import {Title} from '../components/Title'
import {SearchForm} from '../components/SearchForm'
import { MoviesList } from '../components/MoviesList'

import {Detail} from '../pages/Detail'

export class Home extends Component {

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
        <Title>Buscador de Peliculas</Title>
        <div className="searchContainer">
          <SearchForm onResults={this.handleResults}></SearchForm>
        </div>
            {this.state.usedSearch
            ? this.renderResults()
            : <small>Utilice el formulario para la busqueda</small>
            }
        </div>
    );
  } 
}

