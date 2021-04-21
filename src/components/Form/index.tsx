import styled from "styled-components";

export const Form = styled.form`
    padding: 3vh 0;
    width: 30vw;
    h1{
        text-align: center;
    }
    p{
        flex: 1;
        line-height: 6vh;
        position: relative;
        width: 100%;
        &.flex{
            display: flex;
            justify-content: center;
            margin: 0;
        }
        a{
            margin: 0 1vw;
            text-decoration: none;
            transition: 0.3s;
            &:hover{
                text-decoration: underline;
            }
        }
        label{
            bottom: -5vh;
            font-size: 0.8rem;
            position: absolute;
        }
        input, textarea{
            background-color: #9EB3C2;
            border: none;
            line-height: 6vh;
            padding-left: 1vw;
            width: 100%;
        }
        textarea{
            height: 12vh;
        }
        button{
            margin: 0;
            width: 40%;
        }
    }
`;

export const Row = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 5vh 0;
    width: 100%;
    p{
        flex: 1;
        margin: 0 1vw;
    }
    span{
        margin: 0 1vw;
        input{
            margin-right: 0.5vw;
        }
    }
`;