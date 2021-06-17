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
    width: 80%;
`;

export const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem 0 0;
    width: 100%;
    h1{
        font-size: 12vh;
        text-transform: uppercase;
    }
    p{
        font-size: 5vh;
        margin: 1vh 0 10vh;
    }
`;

export const BannerImage = styled.div`
    height: 80%;
    img{
        height: 100%;
    }
`;

export default Container;