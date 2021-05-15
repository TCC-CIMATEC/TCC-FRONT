import { ContainerButton, ContainerLight, ContainerButtonDashBoard, LinkClose, Title } from './styles';
import CloseImage from '../../assets/close_big.svg';


interface ButtonProps {
  title: string;
  background: string;
}

function Button({ title, background }: ButtonProps) {
  return (
    <ContainerButton background={background}>
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

export function ButtonDashBoard({ title, background }: ButtonProps) {
  return (
    <ContainerButtonDashBoard background={background}>
      <Title>{title}</Title>
    </ContainerButtonDashBoard>
  )
}

export function ButtonLight({ title, background }: ButtonProps) {
  return (
    <ContainerLight background={background}>
      <Title>{title}</Title>
    </ContainerLight>
  );
}


export default Button;
