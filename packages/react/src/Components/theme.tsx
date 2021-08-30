import React, {createContext, PropsWithChildren, useContext} from 'react';

export const black = "#000000";
export const white = "#ffffff";

export const pink99100 = "##FF0385";
export const pink9994 = "#F0027D";
export const pink9988 = "#E00275";
export const pink9982 = "#D1036F";
export const pink9976 = "#C20265";
export const pink9970 = "#B3025D";
export const pink9964 = "#A30255";
export const pink9958 = "#94014D";
export const pink9952 = "#94014D";
export const pink9946 = "#75013D";
export const pink9940 = "#660135";
export const pink9934 = "#57012D";

export const blue86100 = "#2478FF";
export const blue8694 = "#2271F0";
export const blue8688 = "#5584D2";
export const blue8682 = "#3970CA";
export const blue8676 = "#1C5BC2";
export const blue8670 = "#1954B3";
export const blue8664 = "#174DA3";
export const blue8658 = "#154594";
export const blue8652 = "#133E85";
export const blue8646 = "#103775";
export const blue8640 = "#0E3066";
export const blue8634 = "#0C2957";

export const grey91 = "#E8E8E8";
export const grey82 = "#D1D1D1";
export const grey73 = "#BABABA";
export const grey64 = "#A3A3A3";
export const grey55 = "#8C8C8C";
export const grey46 = "#757575";
export const grey37 = "#5E5E5E";
export const grey28 = "#5E5E5E";
export const grey19 = "#303030";
export const grey10 = "#1A1A1A";

const pink = {
    0: pink99100,
    1: pink9994,
    2: pink9988,
    3: pink9982,
    4: pink9976,
    5: pink9970,
    6: pink9964,
    7: pink9958,
    8: pink9952,
    9: pink9946,
    10: pink9940,
    11: pink9934
}

const blue = {
    0: blue86100,
    1: blue8694,
    2: blue8688,
    3: blue8682,
    4: blue8676,
    5: blue8670,
    6: blue8664,
    7: blue8658,
    8: blue8652,
    9: blue8646,
    10: blue8640,
    11: blue8634
}

const grey = {
    0: grey91,
    1: grey82,
    2: grey73,
    3: grey64,
    4: grey55,
    5: grey46,
    6: grey37,
    7: grey28,
    8: grey19,
    9: grey10
}

export const colors = {
    pink,
    grey,
    white,
    black,
    blue
}

type ThemeShape = {
    colors: {
        [key: string]: {[key: number]: string}
    }
}

const ThemeContext = createContext<ThemeShape>({
    colors: {
        pink,
        grey,
        white,
        black,
        blue
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