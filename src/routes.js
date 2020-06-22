import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import DoacoesPendentes from './pages/DoacoesPendentes';
import MinhasDoacoes from './pages/MinhasDoacoes';
import Informacoes from './pages/Informacoes';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="*" component={Login} />
                <Route path ="/" exact component ={Login} />
                <Route path ="/cadastro"  component ={Cadastro} />
                <Route path ="/doacoespendentes"  component ={DoacoesPendentes} />
                <Route path ="/minhasdoacoes"  component ={MinhasDoacoes} />
                <Route path ="/informacoes"  component ={Informacoes} />
            </Switch>
        </BrowserRouter>
    );
} 