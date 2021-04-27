import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Cadastro from '../pages/Cadastro';
import ConfirmaCadastro from '../pages/Confirma-cadastro';
import ConfirmaSenha from '../pages/Confirma-senha';
import EsqueciSenha from '../pages/Esqueci-senha';
import FaleConosco from '../pages/Fale-conosco';
import Login from '../pages/Login';
import TrilhaInicial from '../pages/Trilha-Inicial';

import Main from '../pages/Main';
import Sobre from '../pages/Sobre';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/sobre" exact component={Sobre} />
                <Route path="/fale-conosco" exact component={FaleConosco} />
                <Route path="/login" exact component={Login} />
                <Route path="/esqueci-senha" exact component={EsqueciSenha} />
                <Route path="/cadastro" exact component={Cadastro} />
                <Route path="/confirma-cadastro" exact component={ConfirmaCadastro} />
                <Route path="/confirma-senha" exact component={ConfirmaSenha} />
                <Route path="/trilha-inicial" exact component={TrilhaInicial} />
                <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}