import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
render(){
  return (
    <div className='footer'>

      <section className='footer-subscription'>
        <p>
          Unete a nosotros y obten toda la informacion del mundo del cine!
        </p>
        <p>
          Puedes desuscribirte en cualquier momento.
        </p>

        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Ingresa tu email'
            />
            <br></br>
            <button className="button is-primary">
              <strong>Registrate!</strong>
            </button>

          </form>
        </div>
      </section>

      <div class='footer-links'>

        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sobre Nosotros</h2>
            <Link to='/'>Historia</Link>
            <Link to='/'>Personal</Link>
            <Link to='/'>Fuentes</Link>
            <Link to='/'>Terminos de Servicio</Link>
          </div>

          <div className='footer-link-items'>
            <h2>Contacto</h2>
            <Link to='/'>Email</Link>
            <Link to='/'>Soporte</Link>
            <Link to='/'>Whatsapp</Link>
            <Link to='/'>Informacion Adicional</Link>
          </div>

        </div>

        <div className='footer-link-wrapper'>

          <div className='footer-link-items'>
            <h2>Fuentes</h2>
            <Link to='/'>Udemy</Link>
            <Link to='/'>OMBdb</Link>
            <Link to='/'>Bulma</Link>
            <Link to='/'>Google Fonts</Link>
          </div>

          <div className='footer-link-items'>
            <h2>Nuestras Redes</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>Github</Link>
            <Link to='/'>Twitter</Link>
          </div>

        </div>

      </div>
    </div>
  );
}
}
