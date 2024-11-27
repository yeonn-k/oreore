import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    @font-face {
    font-family: 'yg-jalnan';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }

    body {
        font-family: "Noto Sans KR", sans-serif;
        display: flex;
        justify-content: center;

    }

    a {
        text-decoration: none;
        color:#000
        ;
    }

    .container {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
    background-color: ${(props) => props.theme.color.ivory};
  }
`;

export default GlobalStyle;
