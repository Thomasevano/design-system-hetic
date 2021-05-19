<template>
  <button type="button" :class="classes" @click="onClick" :style="style" v-if="typeButton === 'lean'">{{ label }}
    <arrow-icon/>
  </button>
</template>

<script>
import './button.scss';
import { reactive, computed } from 'vue';
import ArrowIcon from '../components/ArrowIcon.vue';

export default {
  name: 'my-button',

  components: {
    ArrowIcon,
  },

  props: {
    label: {
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
        return ['primary', 'secondary', 'lean'].indexOf(value) !== -1;
      },
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-button': true,
        'storybook-button--primary': props.typeButton === 'primary',
        'storybook-button--secondary': props.typeButton === 'secondary',
        'storybook-button--primary__disabled': props.typeButton === 'primary' && props.disabled,
        'storybook-button--secondary__disabled': props.typeButton === 'secondary' && props.disabled,
        'storybook-button--lean': props.typeButton === 'lean',
        'storybook-button--lean__disabled': props.typeButton === 'lean' && props.disabled,
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
