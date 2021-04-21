import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Cadastro from '../pages/Cadastro';
import ConfirmaCadastro from '../pages/Confirma-cadastro';
import ConfirmaSenha from '../pages/Confirma-senha';
import EsqueciSenha from '../pages/Esqueci-senha';
import FaleConosco from '../pages/Fale-conosco';
import Login from '../pages/Login';

import Main from '../pages/Main';
import Sobre from '../pages/Sobre';

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
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}