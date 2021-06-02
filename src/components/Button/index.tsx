import { ContainerButton, ContainerLight, ContainerButtonDashBoard, LinkClose, Title } from './styles';
import CloseImage from '../../assets/close_big.svg';
import { ButtonHTMLAttributes } from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  background: string;
}

function Button({ title, background, ...rest}: ButtonProps) {
  return (
    <ContainerButton {...rest} background={background}>
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
