import { Screen } from 'quasar';

type Size = number | string | boolean;

export function useScreen(
    sm: Size,
    xs: Size,
    md: Size,
    lg: Size,
    xl: Size
): Size {
    switch (Screen.name) {
        case 'sm':
            return sm;
        case 'xs':
            return xs;
        case 'md':
            return md;
        case 'lg':
            return lg;
        case 'xl':
            return xl;
    }
}

export function setSize(sm: number, md: number, lg: number, xl: number) {
    Screen.setSizes({ sm, md, lg, xl });
}
