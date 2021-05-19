<template>
  <my-button label="Se connecter" typeButton="lean" disabled/>
</template>

<script>
import MyButton from '../stories/Button.vue';
export default {
  name: 'Home',

  components: { MyButton },
}

</script>

<style scoped lang="scss">
@import '../styles/main.scss';

</style>
