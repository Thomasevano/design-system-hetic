<template>
  <my-button text="Se connecter" typeButton="primary"/>
  <my-button text="Se connecter" typeButton="secondary"/>
  <link-button text="Reset password"/>
</template>

<script>
import MyButton from '../components/Button/Button.vue';
import LinkButton from '../components/LinkButton/LinkButton.vue';
export default {
  name: 'Home',

  components: { MyButton, LinkButton },
}

</script>

<style scoped lang="scss">
@import '../styles/main.scss';

</style>
