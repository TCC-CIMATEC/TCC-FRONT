import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    display: flex;
    height: 85vh;
    margin: 0 auto;
    justify-content: center;
    position: relative;
    width: 80%;
`;

export const Banner = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
    width: 40vw;
`;

export const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: space-between;
    padding: 5rem 0 0;
    h1{
        text-transform: uppercase;
    }
`;

export const BannerImage = styled.div`
    height: 80%;
    img{
        height: 100%;
    }
`;

export default Container;