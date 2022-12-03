import {createGlobalStyle} from 'styled-components';
import RobotoWoff2 from '../../fonts/roboto-v30-latin-regular.woff2';
import RobotoWoff from '../../fonts/roboto-v30-latin-regular.woff';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoWoff2}) format('woff2'),
    url(${RobotoWoff}) format('woff');
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
  html, body, #root {
    height: 100vh;
    width: 100vw;
  }
  #root {
    display: flex;
    flex-direction: column;
  }
`;
