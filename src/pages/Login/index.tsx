import { Container } from './styles';

import Button from '../../components/Button';

function Login() {
  return (
    <Container>
      <Button title="Entrar" background="#659157" />
      <Button title="Ingressar em nova turma" background="#659157" />
      <Button title="Cancelar" background="#D7263D" />
    </Container>
  );
}

export default Login;
