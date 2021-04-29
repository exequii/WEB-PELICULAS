import React, {Component} from 'react'
import PropTypes from 'prop-types'

const API_KEY ='d664e9fa'

export class Detail extends Component{
    static propTypes = {
        id: PropTypes.string 
    }

    state = { movie: {} }

    fetchMovie ({id}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log({id})
                console.log({movie})
                this.setState({movie})
            })
    }

    componentDidMount() {
        const {id} = this.props
        this.fetchMovie({id})
    }

    render(){
        return (
            <p>Pagina de Detalle</p>
        )
    }
}