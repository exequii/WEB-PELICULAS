import React from 'react'
import {BackToHome} from '../components/BackToHome'

export const NotFound = () => (
    <div className='notification is-danger'>
        <h1>ERROR 404!</h1>
        <h2>No existe la Pagina</h2>
        <BackToHome></BackToHome>
    </div>
)