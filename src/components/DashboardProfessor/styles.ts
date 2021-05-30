import styled from "styled-components";

export const Container = styled.div`
    width: 100%; 
    height: 100%;
    display: flex;

`;

export const Content = styled.div`
    display: flex;
    width: 100%;
`;

export const DashboardWrapper = styled.div`
    justify-content: center;
    h1{
        margin-bottom: 6vh;
    }
`;

export const DashboardContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`;

export const WrapperButton = styled.div`
    bottom: 0;
    display: flex;
    justify-content: center;
    //position: absolute;
    right: 0;   
    width: 90%;
    margin-top: 20px;
    //margin-left: -100px;
    //button{
        //flex: 1;
    //}
`;