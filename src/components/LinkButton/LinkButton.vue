<template>
  <a :href="linkUrl" :class="classes">
    {{ text }}
    <arrow-icon/>  
  </a>
</template>

<script>
import ArrowIcon from '../ArrowIcon.vue';
import { reactive, computed } from 'vue';

export default {
  name: 'LinkButton',

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
    linkUrl: {
      type: String,
      required: true,
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
