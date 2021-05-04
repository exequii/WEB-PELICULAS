import React,{Component} from 'react'
import 'bulma/css/bulma.css'

import {Link} from 'react-router-dom'


export class NavBar extends Component {

    render(){
        return (
            
            <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                    </Link>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div className="navbar-start">
                    <Link className="navbar-item">
                        Home
                    </Link>

                    <Link className="navbar-item">
                        Peliculas
                    </Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link className="navbar-link">
                        Detalle
                        </Link>

                        <div className="navbar-dropdown">
                        <Link className="navbar-item">
                            Sobre Nosotros
                        </Link>
                        <Link className="navbar-item">
                            Oportunidades
                        </Link>
                        <Link className="navbar-item">
                            Contacto
                        </Link>
                        <hr className="navbar-divider"/>
                        <Link className="navbar-item">
                            Reportar falla
                        </Link>
                        </div>
                    </div>
                    </div>

                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <Link className="button is-primary">
                            <strong>Registrate!</strong>
                        </Link>
                        <Link className="button is-light">
                            Iniciar Sesion
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </nav>
            
        )
    }
    
}


