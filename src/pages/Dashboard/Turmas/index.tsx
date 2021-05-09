import Dashboard from '../../../components/Dashboard';
import { Container, Content, TurmaContent } from './styles';


export function Turmas() {
  return (
    <Container className="container-turma">
      <Dashboard>
        <Content className="content-turma">
          <h1>Turmas</h1>
          <TurmaContent>
            <div>CONTEÚDO DA TURMA!!!!!!!!!!!!!!!!!!!!!!!!!!1</div>
          </TurmaContent>
        </Content>
      </Dashboard>
    </Container>
  );
}

export default Turmas;
