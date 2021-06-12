import styled from 'styled-components';

interface ContainerProps {
  background: string;
}

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

export const Title = styled.div`
  font-size: 14px;
  color: white;
  line-height: 100%;
  margin: 0;
`;
