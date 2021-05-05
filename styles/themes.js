import { createGlobalStyle } from 'styled-components';

const shared = {
    fonts: {
        text: 'sans-serif'
    }
}

const lightTheme = {
    ...shared,
    colors: {
        body: '#fafafa',
        text: '#333',
        primary: '#fdca40',
        secondary: '#7d8491',
        red: '#c1292e',
    }
}

const darkTheme = {
    ...shared,
    colors: {
        body: '#333',
        text: '#fafafa',
        primary: '#dba718',
        secondary: '#7d8491',
        red: '#b31217',
    }
}

export { createGlobalStyle, lightTheme, darkTheme };