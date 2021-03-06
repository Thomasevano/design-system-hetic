import Button from '../components/Button/Button.vue';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    Click: {},
    Disabled: { checkBox: false },
    typeInput: { control: { type: 'select', options: ['primary', 'secondary'] } },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  typeButton: 'primary',
  text: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  typeButton: 'secondary',
  text: 'Button',
};
