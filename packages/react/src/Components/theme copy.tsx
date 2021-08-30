import React, {createContext, PropsWithChildren, useContext} from 'react';

type ThemeShape = {
    colors: {
        primary: string,
        secondary: string,
    }
}

const ThemeContext = createContext<ThemeShape>({
    colors: {
        primary: '#aaa',
        secondary: '#bbb',
    }
});

export function ThemeContextProvider(props: PropsWithChildren<{theme: ThemeShape}>) {
    return <ThemeContext.Provider value={props.theme}>
        {props.children}
    </ThemeContext.Provider>

}

export function useThemeContext() {
    return useContext(ThemeContext);
}