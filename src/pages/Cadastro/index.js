import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { validate as validateCPF } from 'gerador-validador-cpf';
import api from '../../service/api';
import img from '../../assets/unnamed.png';

import './styles.css'

export default function Cadastro() {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [bairro, setBairro] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();

        const data = {
            login,
            senha,
            nome,
            bairro,
            cpf,
            email,
        };

        const cpfValido = validateCPF(cpf);
        if (!cpfValido) {
            alert('CPF inválido, digite novamente.');
        }

        try {
            await api.post('/signup', data)
            alert('Cadastro realizado');
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (

        <div className="cadastro-container">

            <div className="content">
                <section className ="fild">

                    
                    <img src={img} alt="doaai" className ="img"/>
                    <form onSubmit={handleRegister}>
                        <div>
                            <label >Nome: </label>
                            <Input className="Nome" value={nome} onChange={event => setNome(event.target.value)} />
                        </div>
                        <div>
                            <label >Cpf: </label>
                            <Input className="Cpf" value={cpf} onChange={event => setCpf(event.target.value)} />
                        </div>

                        <div>
                        <label >Email: </label>
                        <Input className="Email" type="email"  value={email} onChange={event => setEmail(event.target.value)} />
                        </div>

                        <div>
                        <label >Bairro: </label>
                        <Input className="Bairro" value={bairro} onChange={event => setBairro(event.target.value)} />
                        </div>

                        <div>
                        <label >Login: </label>
                        <Input className="Login" value={login} onChange={event => setLogin(event.target.value)} />
                        </div>

                        <div>
                        <label >Senha: </label>
                        <Input className="Senha" type="password"  value={senha} onChange={event => setSenha(event.target.value)} />
                        </div>

                        <section className="buttons">
                            <Button className="cadastrar" type="submit" variant="contained">Cadastrar</Button>
                            <Button className="voltar" href="/" variant="contained">Voltar</Button>
                        </section>

                    </form>
                </section>
            </div>
        </div>

    );
}