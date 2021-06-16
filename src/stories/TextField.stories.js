import TextField from '../components/TextField/TextField.vue';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    disabled: { checkbox: false },
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
  template: '<TextField label="Email" placeholder="Email" name="email" type="email" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'TextField',
  placeholder: 'Placeholder',
  name: 'name',
  type: 'text',
  disabled: false,
  value: '',
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
