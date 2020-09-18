import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './styles.css'
import Header from '../Header'

class CriaMatriz extends Component{
    constructor(){
        super()
        this.state = {
            redirect: false
        }
    }
    configMatriz = (e) =>{
        e.preventDefault(); 
        const x = e.target.elements.x.value;
        const y = e.target.elements.y.value;
        localStorage.setItem('x',x)
        localStorage.setItem('y',y)
        this.setState(() => {
            return {redirect: true}
        })
    }
    renderRedirect = () => {
        if( this.state.redirect)
            return <Redirect push to="/addObjs"/>
    }
    render() {
        return (
            <React.Fragment>
                {this.renderRedirect()}
                <Header frase="Crie a Matriz"/>
                <div className="cria-container">
                    <section className="form">
                        <form onSubmit={this.configMatriz}>
                            <h1>Defina o tamanho da matriz</h1>
                            <input name="x" placeholder="Tamanho do eixo x" type="number" required/>
                            <input name="y" placeholder="Tamanho do eixo y" type="number" required/>
                            <button className="button" type="submit">Criar Matriz</button>
                        </form>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

export default CriaMatriz;

