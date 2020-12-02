import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import './styles.css'

import Header from '../Header'

import Objeto from '../../models/Objeto.js'
import Matriz from '../../models/Matriz.js'
import main from '../../models/main.js'
import mainPromise from '../../models/main.js';

function AddObjs(){
    const [arrayObjs, setArrayObjs] = useState([]);
    const [xMatriz] = useState(parseInt(localStorage.getItem('x')));
    const [yMatriz] = useState(parseInt(localStorage.getItem('y')));
    const [areaRestanteNaMatriz, setAreaRestanteNaMatriz] = useState( xMatriz * yMatriz);
    const [redirect, setRedirect] = useState(false);
    const [ prontoParaCriarMatrizFinal, setProntoParaCriarMatrizFinal] = useState(false);
    const [ MatrizFinal, setMatrizFinal] = useState([]);

   

    function addObj (e){
        e.preventDefault(); 
        const idForm = parseInt(e.target.elements.objId.value)
        const xForm = parseInt(e.target.elements.objX.value);
        const yForm = parseInt(e.target.elements.objY.value);

        if (xForm > xMatriz || yForm > yMatriz){
            alert( 'X ou Y com tamanho maior que a matriz' )
        }
        else if (areaRestanteNaMatriz < (xForm * yForm)){
            alert( 'Area do objeto não cabe na matriz' )
        }
        else{
            const obj = new Objeto(idForm, xForm, yForm)
            const arrayIntermediario = arrayObjs
            arrayIntermediario.push(obj)
            setArrayObjs( arrayIntermediario)

            setAreaRestanteNaMatriz(prevState => prevState - xForm * yForm )
        }
    }

    useEffect( () => {
        if (areaRestanteNaMatriz === 0){
            localStorage.setItem('arrayObjs', JSON.stringify(arrayObjs))
            setProntoParaCriarMatrizFinal( true )
        }
    }, [areaRestanteNaMatriz])

    useEffect( () => {
        async function asyncMain(){
            if (prontoParaCriarMatrizFinal){
                if (arrayObjs.length === 1){
                    const matrizFinalParcial = new Matriz(xMatriz, yMatriz)
                    matrizFinalParcial.addObj({x:0, y:0}, arrayObjs[0])
                    setMatrizFinal(matrizFinalParcial.matriz2D)  
                    console.log(matrizFinalParcial.matriz2D)       
                }    
                else{
                    let resultMatrizFinal = await main(xMatriz, yMatriz, arrayObjs)
                    let i = 10
                    while (resultMatrizFinal === undefined && i <=10 ){
                        resultMatrizFinal = await main(xMatriz, yMatriz, arrayObjs)
                    }
                    setMatrizFinal(resultMatrizFinal)
                    console.log('Resultado Final',resultMatrizFinal) 
                }
                setRedirect(true)
            }
        }
        asyncMain()
    }, [prontoParaCriarMatrizFinal])

    return (
        <React.Fragment>
            {redirect ? <Redirect  to={ { pathname:"/exibeMatriz",
                                          state: {
                                              xMatriz,
                                              yMatriz,
                                              arrayObjs,
                                              MatrizFinal
                                          } } }/>  : null}  
            <Header frase="Escolha os Objetos que preencherão a matriz"/>
            <h1 className="contador"> Area Restante {areaRestanteNaMatriz} </h1>
            <div className="add-container">
                <section className="form">
                    <form onSubmit={addObj}>
                        <input name="objId" placeholder="Identificador do Objeto" type="number" required/>
                        <input name="objX" placeholder="Tamanho no eixo x" type="number" required/>
                        <input name="objY" placeholder="Tamanho no eixo y" type="number" required/>
                        <button className="button" type="submit">Adicionar Objeto</button>
                    </form>
                </section>
            </div>
        </React.Fragment>
    )
}

export default AddObjs;


