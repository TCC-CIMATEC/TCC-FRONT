import Button, { ButtonDashBoard } from '../../../components/Button';
import Dashboard from '../../../components/Dashboard';
import { Container, Content, ModuloContent, Lista } from './styles';
import RankingImg from '../../../assets/ranking.png';
import { Wrapper } from '../../Main/Sobre/styles';
import { Form, Row } from '../../../components/Form';

export function NovaTurmaAluno() {
  return (
    <Container className="container-modulo">
      <Dashboard>
        <Content className="content-modulo">
          <ModuloContent>
            <Wrapper>
              <Form>
                <h1>Nova Turma</h1>
                <Row>
                  <p>
                    <label htmlFor="form-codigo">Digite o código da turma passado por seu(sua) professor(a)</label>
                    <input type="text" name="form-codigo" id="form-codigo" placeholder="Código da Turma" />
                  </p>
                </Row>
                <Row>
                  <p className="flex" style={{ textAlign: "center" }}>
                    <Button title="Cancelar" background="#D7263D" />
                    <Button title="Entrar" background="#659157" />
                  </p>
                </Row>
              </Form>
            </Wrapper>
          </ModuloContent>
        </Content>
      </Dashboard>
    </Container>
  );
}

export default NovaTurmaAluno;
