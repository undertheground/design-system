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
  template: '<Button v-bind="args"/>'
});

export const Primary = Template.bind({});
Primary.args = {
  kind: "primary",
  size: "medium",
  // children: "Button",
  click: () => {
    console.log("ss");
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: "secondary",
  size: "medium",
  children: "Button"
};

export const Ghost = Template.bind({});
Ghost.args = {
  kind: "ghost",
  size: "medium",
  children: "Button"
};

export const Primary_Disabled = Template.bind({});
Primary_Disabled.args = {
  disabled: true,
  kind: "primary",
  size: "medium",
  children: "Button"
};

export const Secondary_Disabled = Template.bind({});
Secondary_Disabled.args = {
  disabled: true,
  kind: "secondary",
  size: "medium",
  children: "Button"
};

export const Ghost_Disabled = Template.bind({});
Ghost_Disabled.args = {
  disabled: true,
  kind: "ghost",
  size: "medium",
  children: "Button"
};

export const Primary_Loading = Template.bind({});
Primary_Loading.args = {
  kind: "primary",
  size: "medium",
  children: "Button",
  isLoading: true
};

export const Secondary_Loading = Template.bind({});
Secondary_Loading.args = {
  isLoading: true,
  kind: "secondary",
  size: "medium",
  children: "Button"
};

export const Ghost_Loading = Template.bind({});
Ghost_Loading.args = {
  kind: "ghost",
  size: "medium",
  children: "Button",
  isLoading: true
};

export const Primary_With_Icon = Template.bind({});
Primary_With_Icon.args = {
  kind: "primary",
  size: "medium",
  children: "Button",
  iconMode: "with-icon",
  iconName: "add"
};

export const Secondary_With_Icon = Template.bind({});
Secondary_With_Icon.args = {
  kind: "secondary",
  size: "medium",
  children: "Button",
  iconMode: "with-icon",
  iconName: "add"
};

export const Ghost_With_Icon = Template.bind({});
Ghost_With_Icon.args = {
  kind: "ghost",
  size: "medium",
  children: "Button",
  iconMode: "with-icon",
  iconName: "add"
};

export const Primary_Icon_Only = Template.bind({});
Primary_Icon_Only.args = {
  kind: "primary",
  size: "medium",
  children: "Button",
  iconMode: "icon-only",
  iconName: "home"
};

export const Secondary_Icon_Only = Template.bind({});
Secondary_Icon_Only.args = {
  kind: "secondary",
  size: "medium",
  children: "Button",
  iconMode: "icon-only",
  iconName: "home"
};

export const Ghost_Icon_Only = Template.bind({});
Ghost_Icon_Only.args = {
  kind: "ghost",
  size: "medium",
  children: "Button",
  iconMode: "icon-only",
  iconName: "home"
};
