import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
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
            await api.put('/signup', data)
            alert('Cadastro realizado');
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (

        <div className="cadastro-container">

            <div className="content">
                <section>

                    <label className="titulo">Cadastro</label>
                    <form onSubmit={handleRegister}>
                        <input placeholder="Nome" value={nome} onChange={event => setNome(event.target.value)} />

                        <input placeholder="Cpf" value={cpf} onChange={event => setCpf(event.target.value)} />

                        <input type="email" placeholder="E-mail" value={email} onChange={event => setEmail(event.target.value)} />

                        <input placeholder="Bairro" value={bairro} onChange={event => setBairro(event.target.value)} />

                        <input placeholder="Login" value={login} onChange={event => setLogin(event.target.value)} />

                        <input type="password" placeholder="Senha" value={senha} onChange={event => setSenha(event.target.value)} />

                        <section className="buttons">
                            <button className="cadastrar" type="submit">Cadastrar</button>
                            <button className="voltar" to="/">Voltar</button>
                        </section>

                    </form>
                </section>
            </div>
        </div>

    );
}