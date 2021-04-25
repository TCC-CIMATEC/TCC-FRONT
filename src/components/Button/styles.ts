import styled from 'styled-components';

interface ContainerProps {
  background: string;
}

export const ContainerButton = styled.button<ContainerProps>`
  padding: 0 3vh;
  position: relative;
  height: 6vh;
  width: 20%;
  color: rgba(255,255,255,0.8);
  background-color: ${({ background }) => background};
  font-size: 1.5rem;
  border-radius: 3rem;
  border: none;
  transition: 0.3s;
  &:hover{
    filter: brightness(0.9);
  }
`;

export const Title = styled.p`
  font-size: 14px;
  color: white;
  line-height: 100%;
  margin: 0;
`;

export const LinkClose = styled.a`
    cursor: pointer;
    height: 5vh;
    position: absolute;
    right: 4vh;
    top: 4vh;
`;