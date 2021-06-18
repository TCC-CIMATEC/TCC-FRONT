import styled from 'styled-components';

export const Container = styled.div`
    align-items : center;
    justify-content: center;
    height: 85vh;
    display : flex;
    flex-direction: column;
    .btn-content{
        margin-top: 4vh;
    }
`;

export const Contexto = styled.div`
    border-radius: 8px;
`;

export const Title = styled.h1`
    text-align: center;
`;


export const SubTitle = styled.h2`
    border-bottom: 1px solid #00000060;
    margin-top: 15px;
    padding-bottom: 1vh;
    text-align: left;
`;

export const Paragraph = styled.p`
    line-height: 22px;
    margin: 1vh 0;
    text-align: justify;
    text-indent: 2vw;
`;

export const Url = styled.a`
    margin-top: 15px;
    &:hover{
        color: red;
    }
`;

export const Image = styled.img`
margin-top: 50px;
`;

export const Light = styled.div`
    align-items: center;
    background-color: #065A82;
    border-radius: 50%;
    box-shadow: 2px 2px 10px #00000060;
    color: #FFEB3B;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    height: 16vh;
    justify-content: center;
    text-align: center;
    width: 16vh;
    &:hover{
        filter: brightness(0.8);
    }
    img{
        height: 6vh;
    }
    span{
        color: #ffffff;
    }
`;