import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {BackToHome} from '../components/BackToHome'

const API_KEY ='c249a5c4'

export class Detail extends Component{
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        }) 
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

    goBack(){
        window.history.back()
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.fetchMovie({id})
    }

    render(){
        const {Title, Poster, Actors, Metascore, Plot} = this.state.movie
        return (
            <div>
                <BackToHome></BackToHome>
                <h1>
                    {Title}
                </h1>
                <img src={Poster} alt=""/>
                <h3>
                    {Actors}
                </h3>
                <span>
                    {Metascore}
                </span>
                <p>
                    {Plot}
                </p>
            </div>
        )
    }
}