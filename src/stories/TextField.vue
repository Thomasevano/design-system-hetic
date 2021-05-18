<template>
  <label :class="classes">
    <div>{{ label }}</div>
    <input type="text" :style="style" :placeholder="placeholder" :disabled="disabled">
  </label>

</template>

<script>
import './textfield.scss';
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
};
</script>
