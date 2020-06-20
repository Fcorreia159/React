import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import api from '../../service/api';
import './styles.css';
import Barra from '../../Toolbar';

export default function DoacoesPendentes() {
    const history = useHistory();
    const [doacoes, setDoacoes] = useState([]);

    const doador = localStorage.getItem('doador');

    useEffect(() => {
        api.get('/doacao/pendentes')
            .then(response => {
                setDoacoes(response.data);
                console.log(response.data)
            })
    }, [doador]);

    async function handleDetail(doacao) {
        try {
            await api.post(`doacao/${doacao.id}/doar`, { doadorId: doador })
                .then(() => {
                    alert ('Doação realizada. Obrigado!');
                    history.push('/minhasdoacoes');
                })

        } catch (err) {
            alert('Erro ao detalhar doação, tente novamente.');
        }
    }

    return (
        <div className="doacoespendentes-container">
            <header>
                <Barra />
            </header>

            <h1>Doações disponiveis</h1>

            <ul className='lista'>
                {doacoes.map(doacao => (
                    <li key={doacao.crianca.id}>
                        <strong>Nome</strong>
                        <p>{doacao.crianca.nome}</p>

                        <strong>Idade</strong>
                        <p>{doacao.crianca.idade}</p>

                        <strong>Bairro</strong>
                        <p>{doacao.crianca.bairro}</p>

                        <button onClick={() => handleDetail(doacao)} type="button" >Doar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}