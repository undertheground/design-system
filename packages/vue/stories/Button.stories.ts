import Button from "../src/Components/Button";

export default {
  title: "Example/Button",
  component: Button
};

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Button v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  size: "small",
  primary: true,
  children: "Button"
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "large",
  children: "Button"
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button"
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button"
};
