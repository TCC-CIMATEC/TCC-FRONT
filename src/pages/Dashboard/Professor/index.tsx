import Dashboard from '../../../components/Dashboard';
import { Container, Content, ProfessorContent } from './styles';
import CardHorizontalProfessor from '../../../components/Card-horizontal-professor';
import { ButtonDashBoard } from '../../../components/Button';
import DashboardProfessor from '../../../components/Dashboard';
import { CardList } from '../../../components/Card-horizontal-professor/styles';


export function Professor() {
  return (
    <Container className="container-aluno">
      <DashboardProfessor>
        <Content className="content-aluno">
          <h1>Turmas</h1>
          <ProfessorContent>
            <CardList>
              <CardHorizontalProfessor img={"https://picsum.photos/300/200"} title={"Turma A (manhã)"} description={"Turma do 1º período"} />
              <CardHorizontalProfessor img={"https://picsum.photos/300/200"} title={"Turma B (tarde)"} description={"Turma do 2º período"} />
              <CardHorizontalProfessor img={"https://picsum.photos/300/200"} title={"Turma C (noite)"} description={"Turma do 1º período"} />
              <CardHorizontalProfessor img={"https://picsum.photos/300/200"} title={"Turma C (noite)"} description={"Turma do 1º período"} />
            </CardList>
          </ProfessorContent>
          <div className="btn-content">
            <ButtonDashBoard title="Nova turma" background="#659157" />
          </div>
        </Content>
      </DashboardProfessor>
    </Container>
  );
}

export default Professor;
