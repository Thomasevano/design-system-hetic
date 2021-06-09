<template>
  <my-button text="Se connecter" typeButton="primary"/>
  <LinkButton text="Reset password" linkUrl="/register"/>
  <TextField label="Label" placeholder="Placeholder" inputState="validated"/>
</template>

<script>
import MyButton from '../components/Button/Button.vue';
import LinkButton from '../components/LinkButton/LinkButton.vue';
import TextField from '../components/TextField/TextField.vue';

export default {
  name: 'Home',

  components: { 
    MyButton,
    LinkButton,
    TextField 
  },
}

</script>

<style scoped lang="scss">
@import '../styles/main.scss';

</style>
