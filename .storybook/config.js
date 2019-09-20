import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
//import { themes } from '@storybook/theming';
import myCustomTheme from './myCustomTheme';

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
//import file ending with index.js
//configure(require.context('../src/stories', true, /\.js$/), module);

addParameters({
    options: {
        theme: myCustomTheme
    }
})
