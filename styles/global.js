import { createGlobalStyle } from './themes';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 8px;
    }

    body {
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.body};
        font-family: sans-serif;
        font-size: 2rem;
        line-height: 1.4;
        transition: all 0.5s;
    }
`