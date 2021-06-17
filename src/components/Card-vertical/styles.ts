import styled from "styled-components";

export const CardV = styled.article`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #00000087;
    cursor: pointer;
    height: 338px;
    margin: 0 3vh;
    transition: 0.3s;
    width: 224px;
    &:hover{
        filter: brightness(0.9);
    }
    div.gray{
        background-color: #01161E;
        border-radius: 10px 10px 0 0;
        height: 50%;
        width: 100%;
        img{
            height: 100%;
            margin: 0 auto;
            padding: 2vh;
        }
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