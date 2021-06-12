import styled from 'styled-components';

interface ContainerProps {
  background: string;
}

export const ContainerButton = styled.button<ContainerProps>`
  background-color: ${({ background }) => background};
  border: none;
  border-radius: 3rem;
  color: rgba(255,255,255,0.8);
  font-size: 1.5rem;
  margin: 0 1vw; 
  padding: 2vh 6vh;
  position: relative;
  transition: 0.3s;
  &:hover{
    filter: brightness(0.9);
  }
`;

export const Title = styled.div`
  font-size: 14px;
  color: white;
  line-height: 100%;
  margin: 0;
`;
