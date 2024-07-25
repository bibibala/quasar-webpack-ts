import { Screen } from 'quasar';

type Size = number | string | boolean;

export function useScreen(sm: Size, xs: Size, md: Size, lg: Size, xl: Size): Size {
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

interface CustomScreenType {
    name: 'sm' | 'xs' | 'md' | 'lg' | 'xl';
    setSizes: (sizes: { sm: Size, md: Size, lg: Size, xl: Size }) => void;
}

const CustomScreen: CustomScreenType = {
    name: Screen.name as any,
    setSizes: (sizes: { sm: Size, md: Size, lg: Size, xl: Size }) => {
    }
};

export function setSize(sm: Size, md: Size, lg: Size, xl: Size) {
    CustomScreen.setSizes({ sm, md, lg, xl });
}


