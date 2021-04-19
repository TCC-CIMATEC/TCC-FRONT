import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    display: flex;
    height: 80vh;
    justify-content: center;
    margin: 0 auto;
    width: 80%;
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
`;

export const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const BannerImage = styled.div`
    width: 50%;
    img{
        width: 100%;
    }
`;

export default Container;