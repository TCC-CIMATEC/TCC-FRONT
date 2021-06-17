import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .new-class{
    display: flex;
    outline: none;
    justify-content: flex-end;
    width: 90%;
  }
`;

export const ProfessorContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 3vh;
`;