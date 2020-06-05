import React from 'react';
import './styles.css';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';



import img from '../../assets/unnamed.png';

export default function login() {

    // const [login, setLogin] = useState('');
    // const [senha, setSenha] = useState('');

    // async function handleSubmit () {
    //     if (this.canSubmit()) {
    //         this.setState({ isRequesting: true });
    //         Keyboard.dismiss();
            
    //         api.post('/login', { login: this.state.login, senha: this.state.senha })
    //           .then(response => response.data)
    //           .then((data) => {
    //             this.setState({ isRequesting: false });
    //             if (data){
    //               AsyncStorage.setItem('doador', data.toString());
    //               this.props.navigation.navigate('DoacoesPendentes');
    //             }
    //             else {
    //               Alert('Usuário/Senha inválidos');
    //           }
    //         })
    //         .catch(() => {
    //           this.setState({ isRequesting: false });
    //           Alert('Desculpe, ocorreu um erro interno da aplicação.');
    //         });
    //     }
    // }

    // async function signIn () {
    //     this.props.navigation.navigate('SignIn')
    // } 

    // async function canSubmit () {
    //     return this.state.login && this.state.senha;
    // } 
     
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

                <section className="buttons">
                    <Button className="entrar" type="submit" variant="contained" href="/profile">Entrar</Button>
                    <Button className="cadastrar" variant="contained" href="/cadastro">Cadastrar</Button>
                </section>  

            </section>


        </div>
    );

}