import React,{Component} from 'react'
import 'bulma/css/bulma.css'


export class NavBar extends Component {

    render(){
        return (
            
            <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div className="navbar-start">
                    <a className="navbar-item">
                        Home
                    </a>

                    <a className="navbar-item">
                        Peliculas
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                        Detalle
                        </a>

                        <div className="navbar-dropdown">
                        <a className="navbar-item">
                            About
                        </a>
                        <a className="navbar-item">
                            Jobs
                        </a>
                        <a className="navbar-item">
                            Contact
                        </a>
                        <hr className="navbar-divider"/>
                        <a className="navbar-item">
                            Report an issue
                        </a>
                        </div>
                    </div>
                    </div>

                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <a className="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a className="button is-light">
                            Log in
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </nav>
            
        )
    }
    
}

