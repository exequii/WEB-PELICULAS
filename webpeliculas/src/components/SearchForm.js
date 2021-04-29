import React, {Component} from 'react'

const API_KEY ='d664e9fa'

export class SearchForm extends Component{

    state = {
        inputMovie: '0'
    }

    /*ESTA FUNCION GUARDA EN EL ESTADO DEL COMPONENTE LO QUE SE VA ESCRIBIENDO EN EL INPUT*/
    handleChange = (e) => {
        this.setState({ inputMovie: e.target.value})
    }

    /* ESTA FUNCION ENVIA LA INFORMACION DEL STATE */
    handleSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                const {Search = [] , totalResults = '0'} = results
                console.log({Search, totalResults})
                this.props.onResults(Search)
            })
            
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            onChange={this.handleChange}
                            type="text" 
                            placeholder="Ingresa una pelicula"/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button>
                    </div>
                </div>
                </form>
        )
    }

}

