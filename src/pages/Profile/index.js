import React from 'react';

import Button from '@material-ui/core/Button';

import './styles.css';
import Barra from '../../Toolbar';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <Barra />
            </header>

            <h1>Doações disponiveis</h1>

            <ul>
                <li>
                    <strong>Nome</strong>
                    <p>nome teste</p>
                    <strong>Idade</strong>
                    <p>idade teste</p>
                    <strong>Bairro</strong>
                    <p>bairro teste</p>
                    <Button variant="outlined">Doar</Button>
                </li>

                <li>
                    <strong>Nome</strong>
                    <p>nome teste</p>
                    <strong>Idade</strong>
                    <p>idade teste</p>
                    <strong>Bairro</strong>
                    <p>bairro teste</p>
                    <Button variant="outlined">Doar</Button>
                </li>

                <li>
                    <strong>Nome</strong>
                    <p>nome teste</p>
                    <strong>Idade</strong>
                    <p>idade teste</p>
                    <strong>Bairro</strong>
                    <p>bairro teste</p>
                    <Button variant="outlined">Doar</Button>
                </li>

                <li>
                    <strong>Nome</strong>
                    <p>nome teste</p>
                    <strong>Idade</strong>
                    <p>idade teste</p>
                    <strong>Bairro</strong>
                    <p>bairro teste</p>
                    <Button variant="outlined">Doar</Button>
                </li>
            </ul>


        </div>
    );
}