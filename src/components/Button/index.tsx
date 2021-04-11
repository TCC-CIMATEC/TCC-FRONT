import { Container, Title } from './styles';

interface ButtonProps {
  title: string;
  background: string;
}

function Button({title, background}: ButtonProps) {
  return (
    <Container background={background}>
       <Title>{title}</Title>
    </Container>
  );
}

export default Button;
