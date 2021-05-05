import { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { GlobalStyles } from './global';


export const GlobalContext = createContext({
    dark: false,
    changeTheme: () => {}
})

function GlobalProvider(props) {
    const [dark, setTheme] = useState(true);

    const checkLocalTheme = () => {
        const localTheme = window.localStorage.getItem('local-theme');

        if (localTheme && localTheme === 'light') {
            setTheme(false)
        } else {
            window.localStorage.setItem('local-theme', 'dark');
        }
    }

    const changeTheme = () => {
        setTheme(dark ? false : true);
        window.localStorage.setItem('local-theme', `${dark ? 'light' : 'dark'}`);
    }

    useEffect(() => {
        checkLocalTheme();
    }, [])

    return(
        <GlobalContext.Provider
        value={{
            dark,
            changeTheme
        }}>
            <ThemeProvider theme={dark ? darkTheme : lightTheme}>
                <GlobalStyles />
                {props.children}
            </ThemeProvider>
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;
