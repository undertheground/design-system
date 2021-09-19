import { addons } from '@storybook/addons';
// import { themes } from '@storybook/theming';
import wishworkTheme from './wishworkTheme';

addons.setConfig({
  theme: wishworkTheme,
  isToolshown: true,
  showPanel: false,
  sidebar: {
    showRoots: false,
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
