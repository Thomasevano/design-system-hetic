<template>
  <div class="form-cta">
    <p class="link-message">{{ message }}</p>
    <LinkButton :text="linkText" :linkUrl="linkUrl"/>
  </div>
</template>

<script>
import LinkButton from '../LinkButton/LinkButton.vue';

export default {
  name: 'FormCTA',

  components: {
    LinkButton,
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