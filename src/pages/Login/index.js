import React from 'react';
import './styles.css';




import img from '../../assets/unnamed.png';

export default function login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={img} alt="daaoi" />
                <h1>Login:</h1> 
                <input />
                <h1>Senha:</h1>
                <input />
                <button type="submit">Entrar</button>
            </section>


        </div>
    );

}