import { Link } from 'react-router-dom';
import LockImg from '../../../assets/lock.png';
import PlayImg from '../../../assets/play_circle_outline.png'
import Button from '../../../components/Button';
import Dashboard from '../../../components/Dashboard';
import { Container, Content, ModuloContent, Lista } from './styles';

interface ItemProps {
  icon: string;
  title: string;
}

function Item({ icon, title }: ItemProps) {
  return (
    <li>
      <span>
        <img src={icon} alt="" />
      </span>
      {title}
      <span>
        <img src={LockImg} alt="Ícone bloqueado" />
      </span>
    </li>
  );
}

export function Modulos() {
  let item = [];
  for (let i = 0; i < 9; i++) {
    item.push(<Item icon={"https://picsum.photos/500"} title={"Módulo I - Variáveis"} />);
  }
  return (
    <Container className="container-modulo">
      <Dashboard>
        <Content className="content-modulo">
          <ModuloContent>
            <Lista>
            <Link to="trilha">
              <li>
                <span>
                  <img src="https://picsum.photos/500" alt="" />
                </span>
                Iniciando Pensamento Computacional
                <span>
                  <img src={PlayImg} alt="Ícone bloqueado" />
                </span>
              </li>
            </Link>
            </Lista>
          </ModuloContent>
        </Content>
      </Dashboard>
    </Container>
  );
}

export default Modulos;
