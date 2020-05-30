import React from 'react';
import './styles.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';



import img from '../../assets/unnamed.png';

export default function login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={img} alt="daaoi" />
                <form className="login">
                    <label>Login: </label>
                    <Input inputProps={{ 'aria-label': 'description' }} />
                </form>
                <form className="senha">
                    <label>Senha: </label>
                    <Input inputProps={{ 'aria-label': 'description' }} />
                </form>
               
                
                <Button className="entrar" type="submit" variant="contained">Entrar</Button>
                <Button className="cadastrar" variant="contained">Cadastrar</Button>
                
            </section>


        </div>
    );

}