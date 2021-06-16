<template>
  <button :class="classes">
    {{ text }}
  </button>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'Button',

  props: {
    text: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    typeButton: {
      type: String,
      validator: function (value) {
        return ['primary', 'secondary'].indexOf(value) !== -1;
      },
    },
  },

  emits: ['click'],

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'button': true,
        'button--primary': props.typeButton === 'primary',
        'button--secondary': props.typeButton === 'secondary',
        'button--primary__disabled': props.typeButton === 'primary' && props.disabled,
        'button--secondary__disabled': props.typeButton === 'secondary' && props.disabled,
      })),
    }
  },
}
</script>