import styled from "styled-components";

export const CardV = styled.article`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #00000087;
    display: flex;
    height: 120px;
    justify-content: space-between;
    margin: 2vh 0;
    margin-right: 2vh;
    padding: 10px;
    transition: 0.3s;
    width: 338px;
    img{
        height: 80%;
    }
    legend{
        height: 100%;
    }
`;

export const CardTitle = styled.h2`
    font-size: 16px;
    text-align: left;
`;

export const CardDescription = styled.p`
    align-items: center;
    color: #00000090;
    display: flex;
    font-size: 12px;
    margin: 1.5vh 0;
    text-align: left;
`;