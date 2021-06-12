import { ContainerButton, Title } from './styles';
import { ButtonHTMLAttributes } from 'react';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  background: string;
}

function Button({ title, background, ...rest }: ButtonProps) {
  return (
    <ContainerButton {...rest} background={background}>
      <Title>{title}</Title>
    </ContainerButton>
  );
}

export default Button;
