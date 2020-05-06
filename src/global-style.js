import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap');

  html, body, #root {
    font-family: 'Work Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: #242323;
  }
`;

export default GlobalStyle;