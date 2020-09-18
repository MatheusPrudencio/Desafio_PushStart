import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import './styles.css'

import Header from '../Header'
import main from '../../Classes/main.js'

function ExibeMatriz({location}){
    //const [arrayObjs, setArrayObjs] = useState(arrayObjsProps)
    //const [yMatriz] = useState(yProps)
    //const [xMatriz] = useState(xProps);
    //const [matrizFinal, setMatrizFinal] = useState(matrizFinalProps)

    console.log('Resultado Final',location.state.MatrizFinal )
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