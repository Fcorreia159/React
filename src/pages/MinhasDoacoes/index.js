import React from 'react';

import Button from '@material-ui/core/Button';

import './styles.css';
import Barra from '../../Toolbar';


export default function MinhasDoacoes() {

    // const [doacoes, setDoacoes] = useState('');

    //trocar_ini
    // componentDidMount() {
    //     this.setState({ isRequesting: true });
    
    //     AsyncStorage.getItem('doador')
    //       .then((doador) => api.get(`doacao/?doadorId=${doador}`))
    //       .then((response) => response.data)
    //       .then((data) => this.setState({ doacoes: data }))
    //       .then(() => this.setState({ isRequesting: false }));
    // }
    
    // navigateToDetail = function (doacao) {
    //     this.props.navigation.navigate('DetalheDoacao', { doacao });
    // }
    //trocar_fim

    return (
        <div className="doacoes-container">
            <header>
                <Barra />
            </header>

            <h1>Minhas Doações</h1>

            <ul>
                <li>
                    <strong>Nome</strong>
                    <p>nome teste</p>
                    <strong>Idade</strong>
                    <p>idade teste</p>
                    <strong>Bairro</strong>
                    <p>bairro teste</p>
                    
                </li>

                <li>
                    <strong>Nome</strong>
                    <p>nome teste</p>
                    <strong>Idade</strong>
                    <p>idade teste</p>
                    <strong>Bairro</strong>
                    <p>bairro teste</p>
                    
                </li>

                <li>
                    <strong>Nome</strong>
                    <p>nome teste</p>
                    <strong>Idade</strong>
                    <p>idade teste</p>
                    <strong>Bairro</strong>
                    <p>bairro teste</p>
                    
                </li>

                <li>
                    <strong>Nome</strong>
                    <p>nome teste</p>
                    <strong>Idade</strong>
                    <p>idade teste</p>
                    <strong>Bairro</strong>
                    <p>bairro teste</p>
                    
                </li>

                <li>
                    <strong>Nome</strong>
                    <p>nome teste</p>
                    <strong>Idade</strong>
                    <p>idade teste</p>
                    <strong>Bairro</strong>
                    <p>bairro teste</p>
                    
                </li>

                <li>
                    <strong>Nome</strong>
                    <p>nome teste</p>
                    <strong>Idade</strong>
                    <p>idade teste</p>
                    <strong>Bairro</strong>
                    <p>bairro teste</p>
                    
                </li>

                <li>
                    <strong>Nome</strong>
                    <p>nome teste</p>
                    <strong>Idade</strong>
                    <p>idade teste</p>
                    <strong>Bairro</strong>
                    <p>bairro teste</p>
                    
                </li>

                <li>
                    <strong>Nome</strong>
                    <p>nome teste</p>
                    <strong>Idade</strong>
                    <p>idade teste</p>
                    <strong>Bairro</strong>
                    <p>bairro teste</p>
                    
                </li>

                <li>
                    <strong>Nome</strong>
                    <p>nome teste</p>
                    <strong>Idade</strong>
                    <p>idade teste</p>
                    <strong>Bairro</strong>
                    <p>bairro teste</p>
                    
                </li>

                <li>
                    <strong>Nome</strong>
                    <p>nome teste</p>
                    <strong>Idade</strong>
                    <p>idade teste</p>
                    <strong>Bairro</strong>
                    <p>bairro teste</p>
                    
                </li>
            </ul>


        </div>
    );
}