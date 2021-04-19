import styled from "styled-components";

export const WrapperFooter = styled.footer`
    align-items: center;
    background-color: #01161E;
    color: #fff;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    padding: 4vh 8vh;
`;

export const About = styled.ul`
    list-style-type: none;
    li{
        margin: 1vh 0;
        a{
            color: #fff;
            text-decoration: none;
            transition: 0.3s;
            &:hover{
                text-decoration: underline;
            }
        }
    }
`;

export const Tcc = styled.div`
    p{
        margin: 1vh 0;
        text-align: center;
    }
`;

export const Contact = styled.div`
    p{
        a{
            align-items: center;
            color: #fff;
            display: flex;
            text-decoration: none;
            transition: 0.3s;
            &:hover{
                text-decoration: underline;
            }
            span{
                margin-right: 1vw;
            }
        }
    }
`;