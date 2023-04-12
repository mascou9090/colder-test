import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ isOpen?: boolean }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #dddddd;
    font-family: 'Roboto', sans-serif;
  }
`;

