// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
// import { MyCanvas } from './MyCanvas';

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: {
      method: '',
      order: ['Under the Ground', 'Components'],
      locales: '',
    },
  },
  // docs: {
  //   components: {
  //     Canvas: MyCanvas,
  //   },
  // },
};
