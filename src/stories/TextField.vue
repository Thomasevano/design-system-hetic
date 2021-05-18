<template>
  <div :class="classes">
    <Form class="msg-container">
      <label>{{ label }}</label>
      <ErrorMessage class="msg-feedback" name="field" />
      <Field name="field" :style="style" :placeholder="placeholder" :disabled="disabled" :rules="isRequired" />
    </Form>
  </div>
</template>

<script>
import './textfield.scss';

import { Field, Form, ErrorMessage } from 'vee-validate';
import { reactive, computed } from 'vue';

export default {
  name: 'my-text-field',

  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    typeInput: {
      type: String,
      validator: function (value) {
        return ['default', 'disabled', 'focus', 'validated', 'error'].indexOf(value) !== -1;
      },
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-text-field': true,
        'storybook-text-field--default': props.typeInput === "default",
        'storybook-text-field--disabled': props.typeInput === "disabled",
        'storybook-text-field--focus': props.typeInput === "focus",
        'storybook-text-field--validated': props.typeInput === "validated",
        'storybook-text-field--error': props.typeInput === "error"
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
    }
  },

  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        return true;
      }

      return 'This is required';
    },
  },
};
</script>
