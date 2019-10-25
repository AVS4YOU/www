import { configure, addParameters } from '@storybook/react';

addParameters({
    options:
        {
        name: 'ASC Storybook',
        sortStoriesByKind: true,
        showAddonPanel: true,
        addonPanelInRight: true
        },
        /* Options for storybook-readme plugin */
        readme: {
        codeTheme: 'github',
        StoryPreview: ({ children }) => children,
    },
});

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

