import Button, { CloseButton } from '../../../components/Button';
import { Wrapper } from '../../Main/Sobre/styles';
import Container from '../../Main/Home/styles';

import MailImg from '../../../assets/mail.svg'
import { Form, Row } from '../../../components/Form';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <Container>
      <Wrapper>
        <CloseButton />
        <img src={MailImg} alt="" />
        <Form>
          <h1>Entrar!</h1>
          <Row>
            <p>
              <label htmlFor="form-login">Digite aqui seu e-mail ou nome de usuário</label>
              <input type="text" name="form-login" id="form-login" placeholder="usuario@exemplo.com" />
            </p>
          </Row>
          <Row>
            <p>
              <label htmlFor="form-password">Digite aqui sua senha</label>
              <input type="password" name="form-password" id="form-password" placeholder="senha" />
            </p>
          </Row>
          <Link to="/dashboard">
            <Row>
              <p style={{ textAlign: "center" }}>
                <Button title="Entrar" background="#659157" />
              </p>
            </Row>
          </Link>
          <p className="flex">
            <a href="/esqueci-senha">Esqueci minha senha</a>
            <a href="/cadastro">Cadastre-se</a>
          </p>
        </Form>
      </Wrapper>
    </Container >
  );
}

export default Login;
