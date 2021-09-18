
export const breakpoints = {
    sm: 320,
    md: 672,
    lg: 1056,
    xlg: 1312,
}

export const windowSize = (width:number) => {
    if (width <= breakpoints.sm) return 'sm' 
    if (width <= breakpoints.md) return 'md' 
    if (width <= breakpoints.lg) return 'lg' 
    if (width <= breakpoints.xlg) return 'xlg' 
    return 'max'
}