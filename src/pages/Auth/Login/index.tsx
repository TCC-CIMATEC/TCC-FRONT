import { ChangeEvent, useState } from 'react';
import Button, { CloseButton } from '../../../components/Button';
import { Wrapper } from '../../Main/Sobre/styles';
import Container from '../../Main/Home/styles';

import MailImg from '../../../assets/mail.svg'
import { Form, Row } from '../../../components/Form';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/AuthContext';

export function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);


  const { signIn } = useAuth();

  async function handleSendLogin(): Promise<void> {
    try {
      console.log('tentou');
      signIn({
        email,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Wrapper>
        <img src={MailImg} alt="" />
        <Form>
          <h1>Entrar!</h1>
          <Row>
            <p>
              <label htmlFor="form-login">Digite aqui seu e-mail ou nome de usuário</label>
              <input onChange={handleChangeEmail} type="text" name="form-login" id="form-login" placeholder="usuario@exemplo.com" />
            </p>
          </Row>
          <Row>
            <p>
              <label htmlFor="form-password">Digite aqui sua senha</label>
              <input onChange={handleChangePassword} type="password" name="form-password" id="form-password" placeholder="senha" />
            </p>
          </Row>
          <Link to="/dashboard">
            <Row>
              <p style={{ textAlign: "center" }}>
                <Button onClick={handleSendLogin} title="Entrar" background="#659157" />
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
