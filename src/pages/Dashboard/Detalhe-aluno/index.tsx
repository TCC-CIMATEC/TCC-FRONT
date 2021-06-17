import { Container, Content, AlunoContent } from './styles';
import CardDetails from '../../../components/Card-details';
import DashboardProfessor from '../../../components/Dashboard';


export function DetalheAluno() {
  return (
    <Container className="container-aluno">
      <DashboardProfessor>
        <Content className="content-aluno">
          <AlunoContent>
            <CardDetails img={"https://picsum.photos/200/300"} student={"Fulaninha"} />
          </AlunoContent>
        </Content>
      </DashboardProfessor>
    </Container>
  );
}

export default DetalheAluno;
