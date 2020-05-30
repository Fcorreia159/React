import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import img from '../../assets/unnamed.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './styles.css'

export default function Cadastro() {
    return (



        <div className="cadastro-container">

            <div className="content">
                <section>
                   
                    <label className="titulo">Cadastro</label>
                    <form>

                        <TextField id="filled-basic" label="nome" variant="outlined" variant="filled" style={{ width: 500 }} />
                        <TextField id="filled-basic" label="Cpf" variant="filled" style={{ width: 500 }} />
                        <TextField type="email" id="filled-basic" label="E-mail" variant="filled" style={{ width: 500 }} />
                        <TextField id="filled-basic" label="Bairro" variant="filled" style={{ width: 500 }} />
                        <TextField id="filled-basic" label="Login" variant="filled" style={{ width: 500 }} />
                        <TextField id="filled-basic" label="Senha" variant="filled" style={{ width: 500 }} />

                        <section className="buttons">
                            <Button className="cadastrar" type="submit" variant="contained">Cadastrar</Button>
                            <Button className="voltar" variant="contained" href="/">Voltar</Button>
                        </section>


                    </form>
                </section>
            </div>


        </div>

    );
}