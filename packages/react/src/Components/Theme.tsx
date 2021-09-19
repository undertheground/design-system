import React, {createContext, PropsWithChildren, useContext} from 'react';
import colors from '@undertheground/color';

export type ThemeShape = {
    colors: {
        [key: string]: {[key: number]: string}
    }
}

const WishworkThemeContext = createContext<ThemeShape>({
    colors: {
        primaryColor: colors.pink,
        secondaryColor: colors.blue,
        neutralColor: colors.grey,
        white: colors.white,
        black: colors.black,
        
    }
});

export function WishworkThemeContextProvider(props: PropsWithChildren<{theme: ThemeShape}>) {
    return <WishworkThemeContext.Provider value={props.theme}>
        {props.children}
    </WishworkThemeContext.Provider>

}

export function useThemeContext() {
    return useContext(WishworkThemeContext);
}