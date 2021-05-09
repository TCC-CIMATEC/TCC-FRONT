import Dashboard from '../../../components/Dashboard';
import CardVertical from "../../../components/Card-vertical";  
import { Container, Content, AlunoContent } from './styles';


export function Aluno() {
  return (
    <Container className="container-aluno">
      <Dashboard>
        <Content className="content-aluno">
          <h1>Trilhas de estudo</h1>
          <AlunoContent>
            <CardVertical img={"https://picsum.photos/300/200"} title={"Lógica de programação"} description={"Aprenda sobre os quatro pilares do Pensamento Computacional, de Jeannete Wing"} />
            <CardVertical img={"https://picsum.photos/300/200"} title={"Pensamento computacional"} description={"Aprenda sobre os quatro pilares do Pensamento Computacional, de Jeannete Wing"} />
          </AlunoContent>
        </Content>
      </Dashboard>
    </Container>
  );
}

export default Aluno;
