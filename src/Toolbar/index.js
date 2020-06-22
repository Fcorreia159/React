import React from 'react';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './styles.css'



export default function Barra() {

    const history = useHistory();

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <AppBar>
            <Toolbar className="toolbar">
                <Button color="inherit" href="/doacoespendentes" >Doações Pendentes</Button>
                <Button color="inherit" href="/minhasdoacoes" >Minhas Doações</Button>
                <Button color="inherit" href="/informacoes">Mais Informações</Button>
                <Button color="inherit" onClick={handleLogout}>Sair</Button>
            </Toolbar>
        </AppBar>
    );
}