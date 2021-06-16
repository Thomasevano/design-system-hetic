import TextField from '../components/TextField/TextField.vue';

export default {
  title: 'Example/TextField',
  component: MyTextField,
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    disabled: { checkbox: false },
    typeInput: { control: { type: 'select', options: ['default', 'disabled', 'focus', 'validated', 'error'] } },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TextField },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-text-field v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  typeInput: 'default',
  label: 'TextField',
  placeholder: 'Placeholder',
};

export const Disabled = Template.bind({});
Disabled.args = {
  typeInput: 'disabled',
  label: 'TextField',
  disabled: true,
  placeholder: 'Placeholder',
};

export const Focus = Template.bind({});
Focus.args = {
  typeInput: 'focus',
  label: 'TextField',
  placeholder: 'Placeholder',
};

export const Validated = Template.bind({});
Validated.args = {
  typeInput: 'validated',
  label: 'TextField',
  placeholder: 'Placeholder',
  iconInput: 'check'
};

export const Error = Template.bind({});
Error.args = {
  typeInput: 'error',
  label: 'TextField',
  placeholder: 'Placeholder',
  iconInput: 'danger'
};
