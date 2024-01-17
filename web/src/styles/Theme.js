import { createTheming } from '@callstack/react-theme-provider';
const { ThemeProvider, withTheme } = createTheming({
    primaryColor: '#101720',
    secondaryColor: 'white',
    tertiaryColor: 'rgba(169, 169, 169, 0.5)',
});
export { ThemeProvider, withTheme };
