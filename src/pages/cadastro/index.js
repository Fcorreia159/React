import React , { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import img from '../../assets/unnamed.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { validate as validateCPF } from 'gerador-validador-cpf';
import api from '../../service/api';

import './styles.css'

export default function Cadastro() {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [bairro, setBairro] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');

    // async function handleSubmit () {

    //   const cpfValido = validateCPF(this.state.cpf);
    //   if (!cpfValido) {
    //     alert('CPF inválido, digite novamente.');
    //   }

    //   if (this.canSubmit() && cpfValido) {

    //     const { nome, cpf, email, bairro, login, senha } = this.state; //verificar se precisa disso
        
    //     api.put('/signup', { nome, cpf, email, bairro, login, senha })
    //       .then(response => response.data)
    //       .then(() => {
    //         this.props.navigation.navigate('Login'); //como que muda de tela?
    //     })
    //     .catch(() => {
    //       alert('Desculpe, ocorreu um erro interno da aplicação.');
    //     }); 
    //   }
    // }

    // async function canSubmit () {
    //   return this.state.login && this.state.nome && this.state.senha
    //   && this.state.bairro && this.state.cpf && this.state.email;
    // } 

    return (

        <div className="cadastro-container">

            <div className="content">
                <section>
                   
                    <label className="titulo">Cadastro</label>
                    <form>

                        <TextField id="filled-basic" label="nome" variant="outlined" variant="filled" style={{ width: 500 }} 
                            placeholder="Seu nome" value={nome} onChange={event => setNome(event.target.value)}/>
                        <TextField id="filled-basic" label="CPF" variant="filled" style={{ width: 500 }}
                            placeholder="Seu Cpf" value={cpf} onChange={event => setCpf(event.target.value)}/>
                        <TextField type="email" id="filled-basic" label="E-mail" variant="filled" style={{ width: 500 }}
                            placeholder="Seu Email" value={email} onChange={event => setEmail(event.target.value)}/>
                        <TextField id="filled-basic" label="Bairro" variant="filled" style={{ width: 500 }}
                            placeholder="Seu Bairro" value={bairro} onChange={event => setBairro(event.target.value)}/>
                        <TextField id="filled-basic" label="Login" variant="filled" style={{ width: 500 }}
                            placeholder="Seu Login" value={login} onChange={event => setLogin(event.target.value)}/>
                        <TextField id="filled-basic" label="Senha" variant="filled" style={{ width: 500 }}
                            placeholder="Sua Senha" value={senha} onChange={event => setSenha(event.target.value)}/>

                        <section className="buttons">
                            <Button className="cadastrar" type="submit" variant="contained" href="/" >Enviar</Button>
                            <Button className="voltar" variant="contained" href="/">Voltar</Button>
                        </section>


                    </form>
                </section>
            </div>


        </div>

    );
}