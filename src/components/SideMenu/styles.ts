import styled from 'styled-components';

interface AvatarImageProps {
  alt: string;
  src: string;
}

interface LinkProps {
  to: string;
}

interface NavTextItemProps {
  key: number;
}


export const NavBar = styled.div`
  background-color: #1C7293;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const NavMenu = styled.nav`
  background-color: #1C7293;
  width: 25vw;
  height: 100%;
  display: flex;
  justify-content: center;
  a, svg{
    color: white;
    text-decoration: none;
    align-items: center;
  }
`;

export const NavLine = styled.li`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style-type: none;
  color: white;
  width: 100%;

  a{
    text-decoration: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    
  }
  div{
    align-items: center;
    display: flex;
    flex: 1;
    height: 100%;
    padding: 10px;
  }
`;

export const NavLineItem = styled.li<NavTextItemProps>`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px;
  list-style-type: none;
  color: white;
  width: 100%;

  a{
    text-decoration: none;
    font-size: 14px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    border-radius: 4px;
    
  }
`;

export const NavMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  width: 100%;
  li{
    border-top: 1px solid white;
    
  }
  .no-border{
    border-top: none;
  }
`;

export const AvatarImg = styled.img<AvatarImageProps>`
  width: 100%;
`;

export const ContentText = styled.span`
  font-size: 12px;
  color: white;
  margin-left: 0.5vw;
`;

export const ContentTitle = styled.span`
  margin:auto;
  color: white;
  font-weight: bold;
  padding: 10px;
`;