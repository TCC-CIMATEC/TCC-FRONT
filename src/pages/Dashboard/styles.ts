import styled from "styled-components";

export const DashboardWrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    width: calc(100% - 40vh);
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

export const Lista = styled.ul`
    list-style-type: none;
    width: 60%;
    margin : 0 auto;
    li{
        align-items: center;
        border-bottom: 1px solid #00000012;
        display: flex;
        justify-content: space-between;
        width: 100%;
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