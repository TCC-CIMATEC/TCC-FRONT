import { ButtonDashBoard } from '../../../components/Button';
import CardHorizontal from '../../../components/Card-horizontal';
import Dashboard from '../../../components/Dashboard';
import { Container, Content, TurmaContent } from './styles';


export function Turmas() {
  return (
    <Container className="container-turma">
      <Dashboard>
        <Content className="content-turma">
          <h1>Turmas</h1>
          <TurmaContent>
            <CardHorizontal img={"https://picsum.photos/300/200"} title={"Turma A (manhã)"} description={"Tuma do primeiro período"} />
            <CardHorizontal img={"https://picsum.photos/300/200"} title={"Turma A (manhã)"} description={"Tuma do primeiro período"} />
            <CardHorizontal img={"https://picsum.photos/300/200"} title={"Turma A (manhã)"} description={"Tuma do primeiro período"} />
          </TurmaContent>
          <div className="btn-content">
            <ButtonDashBoard title="Entrar em nova turma" background="#659157" />
          </div>
        </Content>
      </Dashboard>
    </Container>
  );
}

export default Turmas;
