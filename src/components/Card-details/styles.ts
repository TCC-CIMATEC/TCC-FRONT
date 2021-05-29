import styled from "styled-components";

export const CardV = styled.article`
    background-color: #fff;
    box-shadow: 1px 1px 10px #00000087;
    margin: 0 3vh;
    transition: 0.3s;
    width: 224px;
    &:hover{
        filter: brightness(0.9);
    }
    img{
        height: 250px;
        width: 100%;
    }
    legend{
        padding: 3vh 2vh;
    }
`;

export const CardTitle = styled.h2`
    font-size: 18px;
    text-align: left;
`;

export const CardDescription = styled.p`
    font-size: 14px;
    margin-top: 2vh;
    text-align: center;
`;

export const ListTitle = styled.ul`
    display: flex;
    font-size: 14px;
    list-style-type: none;
    margin: 1vh 0;
    li{
        margin-right: 1vw;
        span{
            margin-right: 0.5vw;
        }
    }
`;

export const Points = styled.div`
    h2{
        font-size: 14px;
    }
    p{
        font-size: 12px;
    }
`;