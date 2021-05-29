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
    display: flex;
    justify-content: flex-end;
    width: 90%;
  }
`;

export const ModuloContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`;

export const WhiteBox = styled.div`
  background-color: #ffffff;
  box-shadow: 2px 2px 10px #00000060;
  margin: 2vh auto 0;
  padding: 10px;
  text-align: center;
  width: 50%;
  h3{
    color: #065A82;
    font-size: 16px;
    font-weight: 300;
    padding: 0;
  }
  p{
    font-size: 32px;
    margin: 0;
  }
`;

export const Span = styled.p`
  font-size: 0.8rem;
  text-align: center;
  width: 100%;
`;