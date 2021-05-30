import Button, { ButtonDashBoard } from '../../../components/Button';
import { Container, Content, ModuloContent, WhiteBox, Span } from './styles';
import { Wrapper } from '../../Main/Sobre/styles';
import { Form, Row } from '../../../components/Form';
import DashboardProfessor from '../../../components/Dashboard';

export function NovaTurmaProfessor() {
  return (
    <Container className="container-modulo">
      <DashboardProfessor>
        <Content className="content-modulo">
          <ModuloContent>
            <Wrapper>
              <Form>
                <h1>Nova Turma</h1>
                <Row>
                  <p>
                    <label htmlFor="form-name">Digite aqui o nome da Turma</label>
                    <input type="text" name="form-name" id="form-name" placeholder="Nome" />
                  </p>
                </Row>
                <Row>
                  <p>
                    <label htmlFor="form-description">Digite aqui uma breve descrição da Turma</label>
                    <input type="text" name="form-description" id="form-description" placeholder="Descrição" />
                  </p>
                </Row>
                <Row>
                  <p>
                    <WhiteBox>
                      <h3>Código da Turma</h3>
                      <p>123AF</p>
                    </WhiteBox>
                    <Span>Compartilhe esse código com seus alunos!</Span>
                  </p>
                </Row>
                <Row>
                  <p className="flex" style={{ textAlign: "center" }}>
                    <Button title="Voltar" background="#D7263D" />
                    <Button title="Criar Turma" background="#659157" />
                  </p>
                </Row>
              </Form>
            </Wrapper>
          </ModuloContent>
        </Content>
      </DashboardProfessor>
    </Container>
  );
}

export default NovaTurmaProfessor;
