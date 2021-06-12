import styled from 'styled-components';
import { darken } from 'polished';

interface RadioBoxProps {
  isActive: boolean;
}

export const Radios = styled.div`
  display: flex;
`;

export const RadioBox = styled.button<RadioBoxProps>`
  height: 34px;
  width: 100px;
  border: 2px solid ${(props) => (props.isActive ? '#9EB3C2' : '#bbbbbc')};
  border-radius: 0.25rem;

  background: ${(props) => (props.isActive ? '#fff' : '#f2f5f8')};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  & + & {
    margin-left: 10px;
  }

  &:hover {
    border-color: ${darken(0.1, '#9EB3C2')};
  }

  span {
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => (props.isActive ? '#9EB3C2' : '#bbbbbc')};

    transition: color 0.2s;

    &:hover {
      color: ${darken(0.1, '#9EB3C2')};
    }
  }
`;

export const SideBox = styled.button<RadioBoxProps>`
  height: 34px;
  width: 88px;
  border: 2px solid ${(props) => (props.isActive ? '#9EB3C2' : '#bbbbbc')};
  border-radius: 0.25rem;

  background: ${(props) => (props.isActive ? '#fff' : '#f2f5f8')};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 18px;

  transition: border-color 0.2s;

  & + & {
    margin-left: 10px;
  }

  &:hover {
    border-color: ${darken(0.1, '#9EB3C2')};
  }

  span {
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => (props.isActive ? '#9EB3C2' : '#bbbbbc')};

    transition: color 0.2s;

    &:hover {
      color: ${darken(0.1, '#9EB3C2')};
    }
  }
`;

export const FormFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

