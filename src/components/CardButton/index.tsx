import { ButtonHTMLAttributes } from 'react';
import { ContainerLight, Title } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  background: string;
}

export function ButtonLight({ title, background }: ButtonProps) {
  return (
    <ContainerLight background={background}>
      <Title>{title}</Title>
    </ContainerLight>
  );
}
