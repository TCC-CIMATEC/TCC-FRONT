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
  .btn-content{
    width: 90%;
    button{
      float: right;
    }
  }
`;

export const TurmaContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;