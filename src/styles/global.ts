import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #9EB3C2;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6, strong {
    color: #01161E;
    font-weight: 600;
  }

  p, a{
    color: #01161E;
  }

  button {
    cursor: pointer;
  }
`;