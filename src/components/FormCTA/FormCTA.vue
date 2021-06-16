<template>
  <div class="form-cta">
    <p class="link-message">{{ message }}</p>
    <Link :text="linkText" :url="linkUrl"/>
  </div>
</template>

<script>
import Link from '../Link/Link.vue';

export default {
  name: 'FormCTA',

  components: {
    Link,
  },

  props: {
    message: {
      type: String,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    },
    linkUrl: {
      type: String,
      required: true,
    }
  },
};
</script>