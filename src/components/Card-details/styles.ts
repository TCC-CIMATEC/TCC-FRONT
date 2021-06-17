import styled from "styled-components";

export const CardV = styled.article`
    background-color: #fff;
    box-shadow: 1px 1px 10px #00000087;
    margin: 0 3vh;
    transition: 0.3s;
    width: 224px;
    img{
        height: 250px;
        width: 100%;
    }
    legend{
        padding: 2vh;
    }
    div.rowButton{
        display: flex;
        justify-content: flex-end;
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
    margin: 1vh 0 2vh;
    li{
        margin-right: 1vw;
        span{
            color: #065A82;
            margin-right: 0.5vw;
        }
    }
`;

export const Points = styled.div`
    margin-bottom: 2vh;
    h2{
        border-bottom: 1px solid #00000040;
        font-size: 14px;
        padding-bottom: 1vh;
        span{
            color: #065A82;
            margin-right: 0.5vw;
        }
    }
    p{
        font-size: 13px;
        margin-top: 1vh;
        span{
            margin-right: 0.5vw;
            color: #659157;
        }
        &:last-child{
            span{
                color: #D7263D;
            }
        }
    }
`;