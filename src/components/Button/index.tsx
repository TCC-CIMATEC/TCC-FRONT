import { ContainerButton, LinkClose, Title } from './styles';
import CloseImage from '../../assets/close_big.svg';

interface ButtonProps {
  title: string;
  background: string;
  backgroundHover: string;
}

function Button({ title, background }: ButtonProps) {
  return (
    <ContainerButton background={background} backgroundHover={background}>
      <Title>{title}</Title>
    </ContainerButton>
  );
}

export function CloseButton() {
  return (
    <LinkClose href="#">
      <img src={CloseImage} alt="Ícone fechar tela" />
    </LinkClose>
  );
}

export default Button;
