import MyButton from './Button.vue';

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    Click: {},
    Disabled: { checkBox: false },
    typeInput: { control: { type: 'select', options: ['primary', 'secondary', 'lean'] } },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  typeButton: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  typeButton: 'secondary',
  label: 'Button',
};

export const Lean = Template.bind({});
Lean.args = {
  typeButton: 'lean',
  label: 'Button',
}

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Button',
}