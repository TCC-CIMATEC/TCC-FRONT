import styled from "styled-components";

export const CardList = styled.ul`
    height: calc(330px + 6vh);
    overflow : scroll;
    overflow-x: hidden;

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }   
`;

export const CardV = styled.li`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #00000087;
    display: flex;
    height: 110px;
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
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
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