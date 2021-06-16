<template>
  <a :href="url" :class="classes">
    {{ text }}
    <arrow-icon/>  
  </a>
</template>

<script>
import ArrowIcon from '../ArrowIcon.vue';
import { reactive, computed } from 'vue';

export default {
  name: 'Link',

  components: { ArrowIcon },

  props: {
    text: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'link': true,
      })),
    }
  },
}
</script>
