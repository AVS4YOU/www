import { configure, addParameters } from '@storybook/react';

global.__PATH_PREFIX__ = ''
// window.___push was renamed to window.___navigate, has to do this renaming too or storybook would error on clicking links
window.___navigate = pathname => {
  action('NavigateTo:')(pathname)
}

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
