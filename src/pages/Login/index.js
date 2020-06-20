import React, { useEffect, useState } from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import api from '../../service/api';
import img from '../../assets/unnamed.png';

export default function Login() {

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  const doador = localStorage.getItem('doador');

  useEffect(() => {
    if (!!doador) {
      history.push('/doacoespendentes');
    }
  })

  async function handleLogin(event) {
    event.preventDefault();

    try {
      api.post('/login/', { login, senha })
        .then(response => { console.log (response) ; return response.data})
        .then(doadorId => {
          localStorage.setItem('doador', doadorId)
          history.push('/doacoespendentes');
        })
        .catch(() => alert('Usuário/Senha inválidos.'));

    } catch (err) {
      alert('Desculpe, ocorreu um erro interno.');
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={img} alt="doaai" />

        <label className="titulo">Login</label>
        <form onSubmit={handleLogin}>
          <label>Login: </label>
          <Input inputProps={{ 'aria-label': 'description' }} value={login} onChange={e => setLogin(e.target.value)} />

          <label>Senha: </label>
          <Input inputProps={{ 'aria-label': 'description' }} type="password" value={senha} onChange={e => setSenha(e.target.value)} />

          <section className="buttons">
            <Button className="entrar" type="submit" variant="contained" >Entrar</Button>
            <Button className="cadastrar" variant="contained" href="/cadastro">Cadastrar</Button>
          </section>
        </form>
      </section>


    </div>
  );

}