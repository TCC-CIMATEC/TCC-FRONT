import styled from 'styled-components';

interface ContainerProps {
  background: string;
}

export const Container = styled.button<ContainerProps>`
  position: relative;
  width: 20%;
  height: 4rem;
  margin: 5rem 0 2.2rem;
  color: rgba(255,255,255,0.8);
  background: ${({background}) => background};
  font-size: 1.5rem;
  border-radius: 3rem;
  border: none;
`;

export const Title = styled.p`
  font-size: 14px;
  color: white;
`;