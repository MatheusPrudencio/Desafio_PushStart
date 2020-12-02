import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import './styles.css'

import Header from '../Header'
import main from '../../models/main.js'

function ExibeMatriz(props){

    function recriaMatriz (e){
        e.preventDefault(); 
    }

    return (
        <React.Fragment> 
            <Header frase="A matriz esta no console "/>
        </React.Fragment>
    )
}

export default ExibeMatriz;