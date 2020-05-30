import React from 'react';

import Button from '@material-ui/core/Button';

import './styles.css';
import Barra from '../../Toolbar';


export default function Informacoes() {
    return (
        <div>
            <header>
                <Barra />
            </header>



            <div className="informacoes-container">
                <h1>Mais informações</h1>
                <div className="content">
                    <strong>Sobre o DOAAI </strong>

                    <p>
                        O natal está chegando, e todo mundo quer ganhar presente. É com esse objetivo que a aplicação DOAAI nasceu.
                    </p>
                    <p>
                        Fomos inspirados a desenvolver esse aplicativo ao receber, em nossa empresa, um pequeno cartão do NACC
                        (Núcleo de Apoio a Criança com Câncer) com um pedido de doação para uma criança. Tivemos então a ideia de
                        tentar facilitar esta ação tão importante. Tornamos mais dinâmico a escolha dos pedidos de doações disponíveis,
                        permitindo que as pessoas visualizem os pedidos em aberto e escolham os pedidos aos quais irão doar os presentes.
                    </p>



                </div>


            </div>


        </div>
    );
}