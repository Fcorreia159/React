import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './styles.css'



export default function Barra(){

    return(
        <AppBar>
                    <Toolbar className="toolbar">
                        <Button color="inherit" href="/profile" >Doar</Button>
                        <Button color="inherit" href="/minhasdoacoes" >Minhas Doanções</Button>
                        <Button color="inherit" href="/informacoes">Mais Informações</Button>
                        <Button color="inherit" href="/">Sair</Button>
                    </Toolbar>
                </AppBar>
    );
}