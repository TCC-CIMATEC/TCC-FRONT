import { ChangeEvent, useState } from 'react';
import Button from '../../../components/Button';
import { Circle, Wrapper } from '../../Main/Sobre/styles';
import Container from '../../Main/Home/styles';
import LogoImg from '../../../assets/CodeWingsWhite.svg';

import MailImg from '../../../assets/mail.svg'
import { Form, Row } from '../../../components/Form';
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
      const response = await signIn({
        email,
        password,
      });

      if(response === 'Credênciais inválidas'){
        alert(response)
      }
    } catch (err) {
      console.log('aaaa');
    }
  }

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={e => e.preventDefault()}>
          <Circle>
            <img src={LogoImg} alt="Logo Code Wings" />
          </Circle>
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
          <Row>
            <Button
              onClick={handleSendLogin}
              title="Entrar"
              background="#659157"
            />
          </Row>
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
