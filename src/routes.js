import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Profile from './pages/Profile';
import MinhasDoacoes from './pages/MinhasDoacoes';
import Informacoes from './pages/Informacoes';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path ="/" exact component ={Login} />
                <Route path ="/cadastro"  component ={Cadastro} />
                <Route path ="/profile"  component ={Profile} />
                <Route path ="/minhasdoacoes"  component ={MinhasDoacoes} />
                <Route path ="/informacoes"  component ={Informacoes} />
            </Switch>
        </BrowserRouter>
    );
} 