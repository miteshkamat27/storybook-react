import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';
//import myCustomTheme from './myCustomTheme';

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
//import file ending with index.js
//configure(require.context('../src/stories', true, /\.js$/), module);

addParameters({
    options: {
        theme: themes.dark
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
    backgrounds: [
        { name: 'twitter', value: '#00aced', default: true },
        { name: 'facebook', value: '#3b5998' },
    ],
    
})
