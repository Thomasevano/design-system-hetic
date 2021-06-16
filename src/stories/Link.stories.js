import Link from '../components/Link/Link.vue';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Link: Link },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Link text="Reset password" url="/reset" />',
});

export const Default = Template.bind({});
Default.args = {
  text: 'Greatest Link',
};
