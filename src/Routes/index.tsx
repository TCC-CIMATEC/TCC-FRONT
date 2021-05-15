import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Cadastro from '../pages/Auth/Cadastro';
import ConfirmaCadastro from '../pages/Auth/Confirma-cadastro';
import ConfirmaSenha from '../pages/Auth/Confirma-senha';
import EsqueciSenha from '../pages/Auth/Esqueci-senha';
import FaleConosco from '../pages/Main/Fale-conosco';
import Login from '../pages/Auth/Login';
import TrilhaInicial from '../pages/Dashboard/Trilha-Inicial';

import Home from '../pages/Main/Home';
import Sobre from '../pages/Main/Sobre';
import Aluno from '../pages/Dashboard/Aluno';
import Turmas from '../pages/Dashboard/Turmas';
import Modulos from '../pages/Dashboard/Modulos';
import RankingAlunos from '../pages/Dashboard/Ranking-aluno';
import NovaTurmaAluno from '../pages/Dashboard/Nova-turma-aluno';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sobre" exact component={Sobre} />
                <Route path="/fale-conosco" exact component={FaleConosco} />
                <Route path="/login" exact component={Login} />
                <Route path="/esqueci-senha" exact component={EsqueciSenha} />
                <Route path="/cadastro" exact component={Cadastro} />
                <Route path="/confirma-cadastro" exact component={ConfirmaCadastro} />
                <Route path="/confirma-senha" exact component={ConfirmaSenha} />
                <Route path="/trilha-inicial" exact component={TrilhaInicial} />
                <Route path="/aluno" exact component={Aluno} />
                <Route path="/turmas" exact component={Turmas} />
                <Route path="/modulos" exact component={Modulos} />
                <Route path="/ranking-aluno" exact component={RankingAlunos} />
                <Route path="/nova-turma-aluno" exact component={NovaTurmaAluno} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}