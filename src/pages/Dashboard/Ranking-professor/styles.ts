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

export const RankingContent = styled.div`
  display: flex;
  width: 100%;
`;

export const ModuloContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

export const Lista = styled.ul`
    height: 25vh;
    list-style-type: none;
    width: 40%;
    margin : 2vh auto;
    overflow-y: scroll;
    &.alunos{
      height: 50vh;
    }

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    li{
        align-items: center;
        border-bottom: 1px solid #00000012;
        display: flex;
        justify-content: space-between;
        margin: 1vh 0;
        padding-right: 2vh;
        width: 100%;
        span{
          font-size: 20px;
            &:first-child{
                img{
                    border-radius: 50%;
                    height: 7vh;
                }
            }
        }
    }
`;