import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../service/api';
import './styles.css';
import Barra from '../../Toolbar';

export default function MinhasDoacoes() {
    const history = useHistory();
    const [doacoes, setDoacoes] = useState('');
    const doador = localStorage.getItem('doador');

    useEffect(() => {
        api.get(`doacao/?doadorId=${doador}`, {
        }).then(response => {
            setDoacoes(response.data);
        })
    }, [doador]);

    function showInfo() {
        return (
            <ul>
                {doacoes?.map(doacao => (
                    <li key={doacao.crianca.id}>
                        <strong>Nome</strong>
                        <p>{doacao.crianca.nome}</p>
                        <strong>Idade</strong>
                        <p>{doacao.crianca.idade}</p>
                        <strong>Bairro</strong>
                        <p>{doacao.crianca.bairro}</p>
                    </li>
                ))}

            </ul>
        );
    }

    return (
        <div className="doacoes-container">
            <header>
                <Barra />
            </header>

            <h1>Minhas Doações</h1>

            { !!doacoes && showInfo() }

        </div>
    );
}