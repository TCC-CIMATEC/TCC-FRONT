import styled from "styled-components";

export const Wrapper = styled.div`
    align-items: center;
    background-color: #ffffff60;
    border-radius: 5vh;
    display: flex;
    height: 90%;
    justify-content: center;
    padding: 0 15vh;
    position: relative;
    img{
        height: 90%;
    }
`;

export const Circle = styled.div`
    background-color: #01161E;
    border-radius: 50%;
    height: 18vh;
    margin: 0 auto;
    padding: 3vh;
    width: 18vh;
    img{
        width: 0%;
    }
`

export const SobreContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    width: 100%;
    h1{
        margin-bottom: 1vh;
        text-transform: uppercase;
    }
    p{
        line-height: 1.5rem;
        margin: 0.5vh 0;
        text-align: justify;
        text-indent: 2vw;
    }
`;
