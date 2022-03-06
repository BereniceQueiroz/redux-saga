import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'),
        url('/fonts/poppins-v19-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'),
        url('/fonts/poppins-v19-latin-regular.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'),
        url('/fonts/poppins-v19-latin-600.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Poppins Bold'),
        url('/fonts/poppins-v19-latin-700.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    body,
    html,
    #root {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }

    button {
      border: 0;
      outline: none;
      cursor: pointer;
      background-color: transparent;
    }

    ul {
        list-style-type: none;
    }

    a {
      text-decoration: none;
      cursor: pointer;
      outline: none;
    }

    input, textarea {
      border: none;
      background-color: transparent;
      cursor: pointer;

    }

  }`}

  `;

export default GlobalStyles;
