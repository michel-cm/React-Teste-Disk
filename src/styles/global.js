import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f1f3f6;
        font-size: 14px;
        color: #29292e;
        font: 400 16px 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }
`;