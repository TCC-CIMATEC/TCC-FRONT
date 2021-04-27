import styled from "styled-components";

export const CardV = styled.article`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #00000087;
    cursor: pointer;
    height: 338px;
    transition: 0.3s;
    width: 224px;
    &:hover{
        filter: brightness(0.9);
    }
    img{
        border-radius: 10px 10px 0 0;
        width: 100%;
    }
    legend{
        padding: 3vh;
    }
`;

export const CardTitle = styled.h2`
    font-size: 18px;
    text-align: center;
`;

export const CardDescription = styled.p`
    font-size: 14px;
    margin-top: 2vh;
    text-align: center;
`;