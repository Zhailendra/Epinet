import { createTheming } from '@callstack/react-theme-provider';
const { ThemeProvider, withTheme } = createTheming({
    primaryColor: '#101720',
    secondaryColor: 'white',
    tertiaryColor: 'rgba(169, 169, 169, 0.5)',

    errorColor: '#FF0000',

    slideBarBg: '#F7F7F7',
    slideBarBorderShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    slideBarItemColor: '#100DB1',
    slideBarItemHoverColor: '#D3D3D3',
});
export { ThemeProvider, withTheme };
