<template>
  <a href="" :class="classes">
    {{ text }}
    <arrow-icon/>  
  </a>
</template>

<script>
import './linkbutton.scss';
import ArrowIcon from '../ArrowIcon.vue';
import { reactive, computed } from 'vue';

export default {
  name: 'link-button',

  components: { ArrowIcon },

  props: {
    text: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'link-button': true,
        'link-button__disabled': props.disabled,
      })),
    }
  },
}
</script>
