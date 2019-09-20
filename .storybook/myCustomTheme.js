import { create } from '@storybook/theming';

export default create({
    base: 'normal',
    colorPrimary: 'crimson',
    colorSecondary: 'deepskyblue',
    // UI
    appBg: 'rgb(162, 0, 37)',
    appContentBg: 'white',
    appBorderColor: 'white',
    appBorderRadius: 4,
    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
    // Text colors
    textColor: 'rgb(255, 250, 250)',
    textInverseColor: 'white',
    // Toolbar default and active colors
    barTextColor: 'white',
    barSelectedColor: 'white',
    barBg: 'rgb(246, 153, 190)',
    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4,
    brandTitle: 'My custom storybook',
    brandUrl: 'https://example.com',
    brandImage: 'https://picsum.photos/200/300'
    })