import styled from 'styled-components';

export const Container = styled.div`
    align-items : center;
    width: 90%;
    margin: 2.5% auto 2.5% auto;
    display : flex;
    flex-direction: column;
    .btn-content{
        margin-top: 4vh;
    }
    h3{
        margin-top: 4vh;
    }
`;

export const Contexto = styled.div`
    padding: 10vh 5vh 2vh;
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

export const Questions = styled.ul`
    display: grid;
    grid-template-columns: 50% 50%;
    list-style-type: none;
    margin: 2vh 0;
    li{
        border-radius: 10px;
        box-shadow: 2px 2px 10px #00000060;
        cursor: pointer;
        height: 15vh;
        margin: 1vh auto;
        padding: 3vh;
        transition: 0.3s;
        width: 80%;
        &:hover{
            filter: brightness(0.8);
        }
        &.blue{
            background-color: #065A82;
        }
        &.green{
            background-color: #659157;
        }
        &.red{
            background-color: #D7263D;
        }
        &.dark-blue{
            background-color: #01161E;
        }
        a{
            align-items: center;
            color: #ffffff;
            font-weight: 100;
            display: flex;
            justify-content: space-around;
            &:hover{
                color: #ffffff;
            }
        }
        p{
            color: #ffffff;
            margin-left: 2vw;
        }
    }
`;