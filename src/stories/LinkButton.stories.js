import LinkButton from '../components/LinkButton/LinkButton.vue';
import '../styles/main.scss';

export default {
  title: 'Components/LinkButton',
  component: LinkButton,
  argTypes: {
    Click: {},
    Disabled: { checkBox: false },
    typeInput: { control: { type: 'select', options: ['primary', 'secondary'] } },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { LinkButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Link-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  typeButton: 'primary',
  text: 'GreatestLink',
};

export const Secondary = Template.bind({});
Secondary.args = {
  typeButton: 'secondary',
  text: 'GreatestLink',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  text: 'GreatestLink',
}