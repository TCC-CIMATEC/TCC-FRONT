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
    justify-content: space-between;
    width: 100%;
`;

export const Lista = styled.ul`
    list-style-type: none;
    width: 60%;
    li{
        align-items: center;
        border-bottom: 1px solid #00000012;
        display: flex;
        justify-content: space-between;
        width: 80%;
        span{
            &:first-child{
                img{
                    border-radius: 50%;
                    height: 7vh;
                }
            }
        }
    }
`;

export const WrapperButton = styled.div`
    align-items: center;
    bottom: 0;
    display: flex;
    position: absolute;
    right: 0;
    width: 70vh;
    button{
        flex: 1;
    }
`;