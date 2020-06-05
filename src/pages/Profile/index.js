import React from 'react';

import Button from '@material-ui/core/Button';

import './styles.css';
import Barra from '../../Toolbar';

export default function Profile() {

    // const [doacoes, setDoacoes] = useState('');

    // async function loadList () {
    //     return (
    //         <FlatList
    //           data={this.state.doacoes}
    //           keyExtractor={item => item.id.toString()}
    //           renderItem={({ item }) => (
    //             <TouchableOpacity key={item.id} onPress={() => this.navigateToDetail(item)}>
    //                 <ListaDoacao doacao={item}/>
    //             </TouchableOpacity>
    //           )}
    //           style={styles.container}
    //         />
    //     )
    // }

    //trocar_ini
    //   componentDidMount() {
    //     this.setState({ isRequesting: true });
    
    //     api.get('/doacao/pendentes')
    //       .then((response) => response.data)
    //       .then((data) => this.setState({ doacoes: data }))
    //       .then(() => this.setState({ isRequesting: false }));
    //   }
    
    //   navigateToDetail = function (doacao) {
    //     this.props.navigation.navigate('DetalheDoacao', { doacao });
    //   }
    //trocar_fim
    
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