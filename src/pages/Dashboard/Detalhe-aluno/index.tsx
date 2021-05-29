import Dashboard from '../../../components/Dashboard';
import CardVertical from "../../../components/Card-vertical";
import { Container, Content, AlunoContent } from './styles';
import CardDetails from '../../../components/Card-details';


export function DetalheAluno() {
  return (
    <Container className="container-aluno">
      <Dashboard>
        <Content className="content-aluno">
          <AlunoContent>
            <CardDetails img={"https://picsum.photos/200/300"} student={"Fulaninha"} />
          </AlunoContent>
        </Content>
      </Dashboard>
    </Container>
  );
}

export default DetalheAluno;
