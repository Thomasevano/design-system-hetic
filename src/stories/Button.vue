<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
import './button.scss';
import { reactive, computed } from 'vue';

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-button': true,
        'storybook-button--primary': props.primary && !props.disabled,
        'storybook-button--secondary': !props.primary && !props.disabled,
        'storybook-button--primary__disabled': props.primary && props.disabled,
        'storybook-button--secondary__disabled': !props.primary && props.disabled,
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
