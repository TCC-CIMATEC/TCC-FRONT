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

export const LinkClose = styled.a`
    cursor: pointer;
    height: 5vh;
    position: absolute;
    right: 4vh;
    top: 4vh;
`;

export const ContainerButtonDashBoard = styled.button<ContainerProps>`
  position: relative;
  height: 6vh;
  color: rgba(255,255,255,0.8);
  background-color: ${({ background }) => background};
  font-size: 1.5rem;
  border-radius: 3rem;
  border: none;
  padding : 2px 20px;
  margin : 0 10px;
  transition: 0.3s;
  &:hover{
    filter: brightness(0.9);
  }
`;

export const ContainerLight = styled.button<ContainerProps>`
  padding: 5px 20px;
  position: relative;
  background-color: transparent;
  font-size: 1.5rem;
  border-radius: 3rem;
  border: none;
  transition: 0.3s;
  &:hover{
    background-color: ${({ background }) => background};
  }
  div{
    color: ${({ background }) => background} !important;
    &:hover{
      color: white !important;
    }
  }
`;