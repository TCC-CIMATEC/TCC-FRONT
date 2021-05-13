import styled from 'styled-components';

export const Container = styled.div`
    align-items : center;
    width: 80%;
    background-color: rgba(79,79,79, 0.2);
    margin: 2.5% auto 2.5% auto;
    display : flex;
`;

export const Contexto = styled.div`
    padding: 30px;
    border-radius: 8px;
`;

export const Title = styled.h1``;


export const SubTitle = styled.h2`
    margin-top: 15px;
`;

export const Paragraph = styled.p``;

export const Link = styled.a`
    margin-top: 15px;
    &:hover{
        color: red;
    }
`;

export const Image = styled.img`
height : 100%;
width: 60%;
`;