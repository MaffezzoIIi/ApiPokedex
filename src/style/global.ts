import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background-position: center;
        background-size: cover;
        background-image: url(https://i.pinimg.com/originals/f6/a1/8a/f6a18ac56651ce4f9ca7e0230706a0b6.png);
        -webkit-font-smothing: antialised;
    }

    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    #root {
        max-width: 1080px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
      }
`;