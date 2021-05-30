import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Cadastro from '../pages/Auth/Cadastro';
import ConfirmaCadastro from '../pages/Auth/Confirma-cadastro';
import ConfirmaSenha from '../pages/Auth/Confirma-senha';
import EsqueciSenha from '../pages/Auth/Esqueci-senha';
import FaleConosco from '../pages/Main/Fale-conosco';
import Login from '../pages/Auth/Login';

import Home from '../pages/Main/Home';
import Sobre from '../pages/Main/Sobre';
import Aluno from '../pages/Dashboard/Aluno';
import Professor from '../pages/Dashboard/Professor';
import Turmas from '../pages/Dashboard/Turmas';
import Modulos from '../pages/Dashboard/Modulos';
import RankingAlunos from '../pages/Dashboard/Ranking-aluno';
import RankingProfessor from '../pages/Dashboard/Ranking-professor';
import NovaTurmaAluno from '../pages/Dashboard/Nova-turma-aluno';
import NovaTurmaProfessor from '../pages/Dashboard/Nova-turma-professor';
import DetalheAluno from '../pages/Dashboard/Detalhe-aluno';
import TrilhaInicial from '../pages/Dashboard/Trilha-Inicial';
import Exercicio from '../pages/Dashboard/Exercicio';

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
                <Route path="/trilha" exact component={TrilhaInicial} />
                <Route path="/exercicio" exact component={Exercicio} />
                <Route path="/aluno" exact component={Aluno} />
                <Route path="/professor" exact component={Professor} />
                <Route path="/turmas" exact component={Turmas} />
                <Route path="/modulos" exact component={Modulos} />
                <Route path="/ranking-aluno" exact component={RankingAlunos} />
                <Route path="/ranking-professor" exact component={RankingProfessor} />
                <Route path="/nova-turma-aluno" exact component={NovaTurmaAluno} />
                <Route path="/nova-turma-professor" exact component={NovaTurmaProfessor} />
                <Route path="/detalhe-aluno" exact component={DetalheAluno} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}