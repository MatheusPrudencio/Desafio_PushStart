import React from 'react';
import './styles.css'
import logo from '../../assets/logo.png'

export default function Header(props){
    return (
        <header>
            <h1 className='header'>{props.frase}</h1>
            <img src={logo} alt="PushStart" width="150" height="150"/>
        </header>
    )
}
