import styled from 'styled-components';

export const Container = styled.div`
  background-color: #9EB3C2;
  border: none;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .arrow {
    position: relative;
    right: 16px;
    pointer-events: none;
  }
`;

export const SelectBox = styled.select`
  width: 100%;
  flex: 1;
  height: 58px;
  font-size: 16px;

  color: #000;
  border: none;
  background-color: #9EB3C2;

  cursor: pointer;

  appearance: none;
  padding: 5px 20px;

`;
