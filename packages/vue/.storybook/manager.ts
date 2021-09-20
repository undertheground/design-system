import { addons } from "@storybook/addons";
// import { themes } from '@storybook/theming';
import wishworkTheme from "./wishworkTheme";

addons.setConfig({
  theme: wishworkTheme,
  isToolshown: false,
  showPanel: true,
  sidebar: {
    showRoots: false
  },
  toolbar: {
    title: { hidden: true },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: true }
  }
});
