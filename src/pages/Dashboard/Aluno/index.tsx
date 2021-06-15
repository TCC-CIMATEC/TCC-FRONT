import Dashboard from '../../../components/Dashboard';
import CardVertical from "../../../components/Card-vertical";
import { Container, Content, AlunoContent } from './styles';
import LogoImg from '../../../assets/CodeWingsWhite.svg';
import { Link } from 'react-router-dom';


export function Aluno() {
  return (
    <Container className="container-aluno">
      <Dashboard>
        <Content className="content-aluno">
          <h1>Trilhas de estudo</h1>
          <AlunoContent>
            <Link to="/modulos">
              <CardVertical img={LogoImg} title={"Lógica de programação"} description={"Aprenda sobre os quatro pilares do Pensamento Computacional, de Jeannete Wing"} />
            </Link>
            <Link to="/modulos">
              <CardVertical img={LogoImg} title={"Pensamento computacional"} description={"Aprenda sobre os quatro pilares do Pensamento Computacional, de Jeannete Wing"} />
            </Link>
          </AlunoContent>
        </Content>
      </Dashboard>
    </Container>
  );
}

export default Aluno;
