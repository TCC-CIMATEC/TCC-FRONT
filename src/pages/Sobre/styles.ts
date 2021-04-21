import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #ffffff60;
    border-radius: 5vh;
    display: flex;
    height: 90%;
    justify-content: center;
    padding: 8vh 15vh;
    position: relative;
    img{
        height: 100%;
    }
`;

export const SobreContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5vh 0;
    h1{
        text-transform: uppercase;
    }
    p{
        line-height: 1.5rem;
        margin-right: 3vw;
        text-align: justify;
        text-indent: 2vw;
    }
`;
